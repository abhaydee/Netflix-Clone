import React,{useState,useEffect} from 'react'
import {instance} from './axios';
import {dataRequired} from './data'
function Banner() {
    const [movie,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await instance.get(dataRequired[0].url)
            console.log("the banner api request",request)
            setMovies(request.data.results)
        }
        fetchData();
    },[dataRequired[0].url])
    return (
        <header>
            <h1> I am the Banner</h1>
        </header>
    )
}

export default Banner
