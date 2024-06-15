import React, { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../../api/integration';
import { getApi } from '../../../api/services';
import MovieCard from '../../../common/movie_card';
import Overview from '../overview';
import Modal from '../../../atoms/modal';
import MovieList from '../../../common/movieList';

const TopRated = () => {
    const [movies , setMovies] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams() // { type: popular } -> { movieId: 12334}
    const [showMovieOverview, setShowMovieOverview] = useState(false);
    const [movieId, setMovieId] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalMoviesData, setTotalMoviesData] = useState(0)

    const getTopRatedMovies = async () => {
        const { data } = await getApi(API_ENDPOINTS.topRatedMovies, { page});
        setMovies(data.results)
        setTotalMoviesData(data.total_results)
        setTotalPages(data.total_pages);
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [page])

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

    const onCloseMovieOverview = () =>{
        setShowMovieOverview(false);
        
        const param = searchParam;
        param.delete("movieId")
        setSearchParam(param)

    }

    return(
        <>
        
          <MovieList 
            handleMovieOverview = {handleMovieOverview} 
            movies={movies} 
            page={page} 
            totalPages={totalPages}
            totalMoviesData={totalMoviesData}
            goToNextPage = {() => setPage(page+1)} 
            goToPrevPage = {() => setPage(page - 1)}
            inputPageHandler = {(e) => setPage(e.target.value)}
           />

          {
            showMovieOverview ?
             <Modal onClose={onCloseMovieOverview}>
                <Overview movieId={movieId}/>
            </Modal>
             : null
          }
        </>
    )
}

export default TopRated;