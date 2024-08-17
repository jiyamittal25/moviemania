import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {BsFillPlayFill} from 'react-icons/bs'

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [videoKey, setVideoKey] = useState(''); // State variable to store the video key
  const title = item.media_type === 'movie' ? item.title : item.name;
  const { user } = UserAuth();

  useEffect(() => {
    // Fetch the video key from TMDb when the component mounts
    const tmdbMovieId = item.id;
    fetch(`https://api.themoviedb.org/3/movie/${tmdbMovieId}/videos?api_key=fc5aad481fc4d0215f130a5b0333be12`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          // Store the video key in the state
          setVideoKey(data.results[0].key);
        }
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [item.id]);

  const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
      if (user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const redirectToYouTubeTrailer = () => {
    if (videoKey) {
      const trailerURL = `https://www.youtube.com/watch?v=${videoKey}`;
      window.open(trailerURL,'_blank');
    } else {
      alert('No trailer available for this movie.');
    }
  };
  const redirectToWikipedia = () => {
    const title = item.title || item.name; // Choose the appropriate title property
    if (title) {
      const wikipediaURL = `https://en.wikipedia.org/wiki/${title}`;
      window.open(wikipediaURL, '_blank');
    } else {
      alert('No Wikipedia page available for this movie.');
    }
  };

  return (
    <>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 transform scale-100 transition-transform duration-200 hover:scale-[110%]'>
        <img
          className='w-full h-auto block movie-image'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/30 opacity-0 hover:opacity-100 text-white'>
          <p className='absolute bottom-5 left-4'><BiChevronDown onClick={redirectToWikipedia} /></p>
          <p className='absolute right-4 top-4'>
            <BsFillPlayFill onClick={redirectToYouTubeTrailer} />
          </p>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {title}
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className='absolute top-4 left-4 text-gray-300' />
            ) : (
              <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
