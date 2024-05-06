import React, { useEffect } from 'react'
import { IoIosStar } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdWatchLater } from "react-icons/md";
import { IoDownloadSharp } from "react-icons/io5";
import './style.css';

const Sidebar = () => {
    useEffect(() => {
      const sidebarEle = document.getElementById('sidebar')
      if(!sidebarEle) return;
      const labels = document.querySelectorAll('.label');
     
      sidebarEle.addEventListener('mouseover', () => {
        // sidebarEle.style.alignItems = 'start'
        labels.forEach((label) => {
            label.style.display = 'inline-block';
        })
      })

      sidebarEle.addEventListener('mouseleave', () => {
        // sidebarEle.style.alignItems = 'center'
        labels.forEach((label) => {
            label.style.display = 'none';
        })
      })
    })
    return (
        <div id="sidebar">
            <div className="side-list">
              {/* <IoIosStar/> */}
              <FaStar />
              <label className='label'>Favourites</label>
            </div>
            <div className="side-list">
              {/* <PiDownloadSimpleBold /> */}
              <IoDownloadSharp />
              <label className='label'>Downloads</label>


            </div>
            <div className="side-list">
              <MdWatchLater />
              <label className='label'>Watch Later</label>

            </div>
        </div>
    )
}

export default Sidebar