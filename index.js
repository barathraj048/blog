import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from './model/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure consistency
const saltRounds = 8;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
    throw err;
  }
};
connectToDb();

app.get('/test', (req, res) => {
  res.json('Test OK');
});

app.post("/register", async (req, res) => {
  const { Name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({
      Name,
      email,
      password: hashedPassword,
    });
    res.json({ userDoc });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(422).json({ error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  try {
    if (userDoc) {
      const passOk = await bcrypt.compare(password, userDoc.password);
      if (passOk) {
        jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (error, token) => {
          if (error) {
            console.log(error);
            res.status(500).json('Internal Server Error');
          } else {
            res.cookie('token', token).json(userDoc);
          }
        });
      } else {
        res.status(422).json('Password error');
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error('JWT verification error:', err);
        res.status(401).json('Unauthorized');
      } else {
        try {
          const { Name, email, _id } = await User.findById(userData.id);
          res.json({ Name, email, id: _id });
        } catch (error) {
          console.error('Error fetching user data:', error);
          res.status(500).json('Internal Server Error');
        }
      }
    });
  } else {
    res.json(null);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
