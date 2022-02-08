import React, { useEffect, useState } from 'react';
import requests from './requests';
import axios from 'axios';
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
      return request;
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n -1) + '...': str
  }

  return (
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        marginBottom: '20px',
      }}
    >
      <div className="banner_contents">
        <h1 className='banner_title'>{movie?.title || movie?.original_name || movie?.name}</h1>

        <p className="banner_description">{truncate(movie?.overview, 200)}</p>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

      </div>

      <div className="banner_faceBottom" />

    </header>
  );
}

export default Banner;
