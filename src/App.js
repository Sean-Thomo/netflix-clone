import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Navbar from './Navbar'
import Banner from './Banner'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Trending" fetchURL={requests.fetchTrending}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
