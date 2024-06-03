import React, { act } from "react";
import './styles.css'
import { IoIosStar } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const data = {
  adult: false,
  backdrop_path: "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
  belongs_to_collection: null,
  budget: 25000000,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "",
  id: 278,
  imdb_id: "tt0111161",
  origin_country: ["US"],
  original_language: "en",
  original_title: "The Shawshank Redemption",
  overview:
    "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  popularity: 116.038,
  poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  production_companies: [
    {
      id: 97,
      logo_path: "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
      name: "Castle Rock Entertainment",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1994-09-23",
  revenue: 28341469,
  runtime: 142,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Fear can hold you prisoner. Hope can set you free.",
  title: "The Shawshank Redemption",
  video: false,
  vote_average: 8.705,
  vote_count: 26218,
};

const actions = [
  {
    label:'Download',
    icon: <IoDownloadOutline/>,
  },
  {
    label:'Share',
    icon: <IoShareSocial/>,
  },
  {
    label:'Like',
    icon: <AiOutlineLike/>,
  },
  {
    label:'Dislike',
    icon:<AiOutlineDislike/>,
  }
]

const Overview = ({ movieId }) => {

    return(
        <div className="overview">
          <div className="movie-details">
            <div className="video">
              <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="movie-poster"/>
            </div>
            <br />
            <div className="movie-name">
               <h3>{data.title}</h3>
               <div className="genre-list">
                  {data.genres.map((genre) =>(
                    <span className="genre">{genre.name}</span>
                  ))}
                  <span className="rating"><IoIosStar/>{data.vote_average}</span>
               </div>
            </div>
            <br />
            <div className="actions">
               {actions.map((action, index) => {
                const icon = action?.icon;
                 return(
                  <div className="action" key={index}>
                     {icon}
                     <span>{action.label}</span>
                  </div>
                 )
               })}
            </div>
            <br />
            <div className="separator"></div>
            <br />
            <p className="story-line">
              <span>Story Line:</span>{data.overview}
            </p>
            <br />
            <div className="top-cast">
               <h3>Top cast</h3>
            </div>
            <br />
          </div>
          <div className="recommendations">
             <h2>Recommendations</h2>
          </div>
        </div>
    )
}

export default Overview;
