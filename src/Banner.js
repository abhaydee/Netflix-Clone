import React,{useState,useEffect} from 'react'
import {instance} from './axios';
import {dataRequired} from './data'
function Banner() {
    const [movie,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await instance.get(dataRequired[0].url)
            console.log("the banner api request",request)
            setMovies(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);
        }
        fetchData();
    },[dataRequired[0].url]);
    console.log("the movie ",movie)
    return (
        <div className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path && movie.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                     <button className="banner__button">Play</button>
                     <button className="banner__button">My List</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
