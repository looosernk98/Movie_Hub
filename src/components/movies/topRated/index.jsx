import React, { useState, useEffect} from 'react';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';

const TopRated = () => {
    const [movies , setMovies] = useState([]);

    const getTopRatedMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.topRatedMovies);
        setMovies(data.results)
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    return(
        <>
         {
            movies?.map((movie, index) =>(
                <MovieCard movie={movie} key={index}/>
            ))
          }
        </>
    )
}

export default TopRated;