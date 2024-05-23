import React, { useEffect, useState } from 'react'
import MovieCard from '../../common/movie_card'
import './style.css';
import JawanPoster from '../../asset/images/Jawan.webp'
import AnimalPoster from '../../asset/images/animal.jpg'
import StrangerThingsPoster from '../../asset/images/stranger-things.webp'
import { api } from '../../api/integration'
import { getApi } from '../../api/services';
import { API_ENDPOINTS } from '../../api/integration';
import Movies from '../movies';
// const movies = [
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: JawanPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: StrangerThingsPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     },
//     {
//         id: 1,
//         name: 'Jawan',
//         poster: AnimalPoster,
//         ratings: 5.9,
//         actress: 'shraddha',
//         actor:'Shahrukh'
//     }
// ]


const Dashboard = () => {
    const [ movies , setMovies] = useState([]);

    // const getTopRatedMovies = async () => {
    //     const { data } = await getApi(API_ENDPOINTS.topRatedMovies);
    //     setMovies(data.results)
    // }
    // useEffect(() => {
    //     getTopRatedMovies()
    // }, [])

    return (
        <div className='container'>
          {/* {
            movies?.map((movie, index) =>(
                <MovieCard movie={movie} key={index}/>
            ))
          } */}

          <Movies/>
        </div>
        
  
    )
}

export default Dashboard