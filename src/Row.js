import React, { useState, useEffect } from "react";
import {instance} from "./axios";
import './row.css'
const base_url="https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl }) {
	const [movies, setMovie] = useState([]);
	useEffect(() => {
		async function fetchApiData() {
			const request = await instance.get(fetchUrl);
			console.log("the api request", request.data.results);
			setMovie(request.data.results);
			return request;
		}
		fetchApiData();
	}, [fetchUrl]);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__grid">
				{movies.map((movie) => (
					<img
						key={movie.id}
						className="row__image"
						src={`${base_url}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
