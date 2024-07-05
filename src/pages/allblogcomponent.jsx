import React from 'react';
import { Link } from 'react-router-dom';
import DateRangeIcon from '@mui/icons-material/DateRange';

const AllblogComponent = ({ id, title, image, date }) => {
  return (
    <Link to={`/details/${id}`} className="blog-component bg-white p-2 rounded-md block max-w-full md:max-w-lg lg:max-w-xl">
      <div className=''>
        <img className="rounded-md w-full h-48 object-cover md:h-64 lg:h-80" src={image} alt={title} />
        <h1 className="p-2 mx-2 mt-4 flex items-center border border-black border-opacity-20 max-w-fit rounded-md">
          <DateRangeIcon className="mr-2" /> {date}
        </h1>
        <h2 className="text-lg md:text-xl p-4 px-2 md:px-4 font-semibold">{title}</h2>
      </div>
    </Link>
  );
};

export default AllblogComponent;
