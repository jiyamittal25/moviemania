import React, { useState, useEffect } from 'react';
import requests from '../Requests';
import Row from '../components/Row';

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(requests.requestUpcoming);
        const data = await response.json();
        setUpcomingMovies(data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='h-full w-full p-28 m-3'>
      {upcomingMovies.map((movie) => (
        <div key={movie.id}>
          <img className='h-[120px] w-[130px]'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
