import React, { useState, useEffect} from 'react';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';

const Trending = () => {
    const [movies , setMovies] = useState([]);

    const getTrendingMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.trendingMovies);
        setMovies(data.results)
    }

    useEffect(() => {
        getTrendingMovies()
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

export default Trending;