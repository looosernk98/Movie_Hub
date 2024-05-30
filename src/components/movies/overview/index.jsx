import React from "react";

const DATA = {
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

const Overview = ({ movieId}) => {

    return(
        <div className="overview">
         <h1>Overview of selected movie</h1>
         <h2>{movieId}</h2>
        </div>
    )
}

export default Overview;
