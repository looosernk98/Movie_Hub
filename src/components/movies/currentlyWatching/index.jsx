import React, { useState, useEffect} from 'react';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';

const CurrentWatching = () => {
    const [movies , setMovies] = useState([]);

    const getCurrentWatchingMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.currentWatchingMovies);
        setMovies(data.results)
    }

    useEffect(() => {
        getCurrentWatchingMovies()
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

export default CurrentWatching;