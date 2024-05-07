import React from 'react'
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