import React, { useState } from "react"
import CurrentlyWatching from "./currentlyWatching";
import TopRated from "./topRated";
import Trending from "./trending";
import Upcoming from "./upcoming";
import './style.css'
/*
 1. Currently Watching
 2. Popular 
 3. Top Rated
 4. Trending
 5. Upcoming
*/

const Tabs = [
    {
        title: 'Top Rated',
        icon: '',
        component: TopRated,
    },
    {
        title: 'Currently Watching',
        icon: '',
        component: CurrentlyWatching,
    },
    {
        title: 'Trending',
        icon: '',
        component: Trending,
    },
    {
        title: 'Upcoming',
        icon: '',
        component: Upcoming,
    },
]

const Movies = () => {
    const [activeTab, setActiveTab] = useState(0);

    const ActiveComponent = Tabs[activeTab]?.component;

    return (
        <div className="movie-container">
            <div className="tab-container">
                {
                    Tabs?.map((tab, index) => (
                        <div key={index} onClick={() => setActiveTab(index)} className="tab-title">{tab?.title}</div>
                    ))
                }
            </div>
            <ActiveComponent />
        </div>
    )
}

export default Movies;