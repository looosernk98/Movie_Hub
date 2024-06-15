import React from "react";
import MovieCard from "../movie_card";
import './styles.css'
         

const MovieList = ({ 
    movies, 
    handleMovieOverview, 
    page,
    totalPages,
    totalMoviesData,
    goToPrevPage,
    goToNextPage,
    inputPageHandler
}) => {
    const start = page*20 - 20 + 1;
    const end = page*20;
    return (
        <>
            {
                movies?.map((movie, index) => (
                    <MovieCard handleOverview={() => handleMovieOverview(movie?.id)} movie={movie} key={index} />
                ))
            }

            <div className="pagination">
               <h3 className="current-showing-results">
                  Showing {start} - {end} of {totalMoviesData} results
               </h3>
               <div className="pagination-actions">
                <button className="btn prev" onClick={goToPrevPage}>prev</button>
                <div className="page-input-container">
                 <span>Page</span>
                 <input className="page-input" type='text' value={page} onChange={inputPageHandler}/>
                 <span>/ {totalPages}</span>
                </div>
                <button className="btn next" onClick={goToNextPage}>next</button>
               </div>
            </div>

        </>
    )
}

export default MovieList;