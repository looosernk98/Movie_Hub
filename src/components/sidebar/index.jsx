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
        labels.forEach((label) => {
            label.style.display = 'inline-block';
        })
      })

      sidebarEle.addEventListener('mouseleave', () => {
        labels.forEach((label) => {
            label.style.display = 'none';
        })
      })
    })
    return (
        <div id="sidebar">
            <div className="side-list">
              <FaStar />
              <label className='label'>Favourites</label>
            </div>
            <div className="side-list">
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
