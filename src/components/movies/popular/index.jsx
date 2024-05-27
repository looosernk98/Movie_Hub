import React, { useState, useEffect} from 'react';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';

const Popular = () => {
    const [movies , setMovies] = useState([]);

    const getPopularMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.getPopularMovies);
        setMovies(data.results)
    }

    useEffect(() => {
        getPopularMovies()
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

export default Popular;