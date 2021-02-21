import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // this for getting last part of url
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error);
          // console.log("oh yeas");
        });
        }
    };
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {
                movies.map((movie) => 
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))
                    && (
                    <img 
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}  alt={movie.name} />
                ))
            }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;