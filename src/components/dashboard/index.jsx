import React, { useEffect } from 'react'
import MovieCard from '../../common/movie_card'
import './style.css';
import JawanPoster from '../../asset/images/Jawan.webp'
import AnimalPoster from '../../asset/images/animal.jpg'
import StrangerThingsPoster from '../../asset/images/stranger-things.webp'

const movies = [
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: JawanPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: StrangerThingsPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    },
    {
        id: 1,
        name: 'Jawan',
        poster: AnimalPoster,
        ratings: 5.9,
        actress: 'shraddha',
        actor:'Shahrukh'
    }
]


const Dashboard = () => {
    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTgxZDE1ZmViNmRlZmU4NmZkYWFmOGEyM2VlMDQwNSIsInN1YiI6IjYxNmE5MjY4NTM4NjZlMDA5M2NhZTBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBqIwkJS549JTTvQ4L2d2Bh6eMtwALTE63p7V0rcmGo'
        }
        };

         fetch(url, options)
        .then(res => res.json())
        .then(json => console.log('DATA: ',json))
        .catch(err => console.error('error:' + err));
    }, [])
    return (
        <div className='container'>
          {
            movies.map((movie, index) =>(
                <MovieCard movie={movie} key={index}/>
            ))
          }
        </div>
        
        
    )
}

export default Dashboard