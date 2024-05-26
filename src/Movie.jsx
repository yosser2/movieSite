import React from 'react'
import { useParams } from 'react-router-dom'
import movies from './Moviescontainer'

function Movie() {
    const param = useParams()
    const movie = movies.find((movie) => movie.id == param.id)
    console.log(movies);
    console.log(movie);
    return (
        <div>
            <img src={movie.img} alt="" style={{ width: "300px", height: "300px" }} />
            <h1 style={{ color: "black" }}>{movie.title}</h1>
            <p style={{ color: "black" }}>{movie.description}</p>
            <p style={{ color: "black" }}>{movie.rating}</p>

        </div>
    )
}

export default Movie
