import React, { useState, useEffect} from 'react';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';

const Upcoming = () => {
    const [movies , setMovies] = useState([]);

    const getUpcomingMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.upcoming);
        setMovies(data.results)
    }

    useEffect(() => {
        getUpcomingMovies()
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

export default Upcoming;