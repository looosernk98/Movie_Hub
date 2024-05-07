import React from 'react'
import './style.css';
import { IoIosStar } from "react-icons/io";
import starIcon from '../../asset/icons/star.svg'

const MovieCard = ({ movie }) =>{
    return(
      <div className="movie-card">
          <img src={movie.poster} alt='movie-poster'/>
          <div className="details">
            <div className="rating"> <img src={starIcon} alt="star-rating" />{movie.ratings}</div>
            <div className="name">{movie.name}</div>
          </div>
      </div>
    )
}

export default MovieCard