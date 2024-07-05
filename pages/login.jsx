import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar'; 
import { UserContext } from '../userContext'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {setUser}=useContext(UserContext)


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(data)); 
      alert('Login Successful');
      setRedirect(true); 
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please try again.');
    }
  };


  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar /> 
      <div className="flex items-center justify-center min-h-screen bg-[#c4bac6]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Email Id"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="text-center text-gray-500 mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
