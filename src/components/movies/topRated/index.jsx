import React, { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';
import Overview from '../overview';
import Modal from '../../../atoms/modal';

const TopRated = () => {
    const [movies , setMovies] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams() // { type: popular } -> { movieId: 12334}
    const [showMovieOverview, setShowMovieOverview] = useState(false);
    const [movieId, setMovieId] = useState(null);

    const getTopRatedMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.topRatedMovies);
        setMovies(data.results)
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    useEffect(() => {
        if(!searchParam.has('movieId')) return;
        const mid = searchParam.get('movieId');
        setMovieId(mid)
        setShowMovieOverview(true)
      }, [searchParam])

    const handleMovieOverview = (movieId) => {
        const param = searchParam // type ULRSearchParam
        param.set("movieId", movieId) // param -> { type: popular, movieId: 12334}
        setSearchParam(param)
    }

    return(
        <>
         {
            movies?.map((movie, index) =>(
                <MovieCard handleOverview={() => handleMovieOverview(movie?.id)} movie={movie} key={index}/>
            ))
          }
          {
            showMovieOverview ?
             <Modal>
                <Overview movieId={movieId}/>
            </Modal>
             : null
          }
        </>
    )
}

export default TopRated;