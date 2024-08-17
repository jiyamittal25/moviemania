import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=fc5aad481fc4d0215f130a5b0333be12&append_to_response=videos`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const playTrailer = (videoKey) => {
    if (videoKey) {
      const youTubeURL = `https://www.youtube.com/watch?v=${videoKey}`;
      window.open(youTubeURL, '_blank');
    } else {
      alert('No trailer available for this movie.');
    }
  };
  const redirectToYouTube = async () => {
        const movieDetails = await fetchMovieDetails(movie?.id);
    
        if (movieDetails && movieDetails.videos && movieDetails.videos.results.length > 0) {
          const videoKey = movieDetails.videos.results[0].key;
          playTrailer(videoKey);
        } else {
          alert('No trailer available for this movie.');
        }
      };

      const redirectToWikipedia = () => {
        const movieTitle = movie?.title;
    
        if (movieTitle) {
          const wikipediaSearchURL = `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(
            movieTitle
          )}`;
    
          window.open(wikipediaSearchURL, '_blank');
        } else {
          alert('Movie title not available.');
        }
      };
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
              onClick={redirectToYouTube}
            >
              Play
            </button>
            <button
              className="border ml-4 text-white border-gray-300 py-2 px-5"
              onClick={redirectToWikipedia}
            >
              More Info
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg-max-w[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
