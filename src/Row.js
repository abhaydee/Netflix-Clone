import React,{useState,useEffect} from 'react'

function Row({title,fetchUrl}) {
    const [movie,setMovie]=useState([]);
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
