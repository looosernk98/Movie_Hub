import React, { useState } from "react"
import CurrentWatching from "./currentlyWatching";
import TopRated from "./topRated";
import Trending from "./trending";
import Upcoming from "./upcoming";
import { useSearchParams } from "react-router-dom";
import './style.css'
import Popular from "./popular";
import { useEffect } from "react";


const Tabs = [
    {
        title: 'Top Rated',
        icon: '',
        component: TopRated,
        param: 'top-rated'
    },
    {
        title: 'Currently Watching',
        icon: '',
        component: CurrentWatching,
        param: 'currently-watching'
    },
    {
        title: 'Trending',
        icon: '',
        component: Trending,
        param: 'trending'

    },
    {
        title: 'Upcoming',
        icon: '',
        component: Upcoming,
        param: 'upcoming'

    },
    {
        title: 'Popular',
        icon: '',
        component: Popular,
        param: 'popular'

    },
]

const Movies = () => {
    const [activeTab, setActiveTab] = useState(0); // 2
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      setSearchParams({ type: 'top-rated'})
    }, [])


    const handleTabClick = (index, param) => {
        setActiveTab(index)
        // const alltabs = document.querySelectorAll('.tab-title')
        // alltabs.forEach((item) => {
        //     if(item.classList.contains('active')){
        //         item.classList.remove('active')
        //     }
        // })
        // event.target.classList.add('active')

        setSearchParams({type: param})
    }

    const ActiveComponent = Tabs[activeTab]?.component; // trending
    return (
        <div className="movie-container">
            <div className="tab-container">
                {
                    Tabs?.map((tab, index) => (
                        <div key={index} onClick={() =>  handleTabClick(index, tab?.param)} className={`tab-title ${index == activeTab ? 'active': ''}`}>{tab?.title}</div>
                    ))
                }
            </div>
            <div className="active-comp-wrapper">
               <ActiveComponent />
            </div>
        </div>
    )
}

export default Movies;