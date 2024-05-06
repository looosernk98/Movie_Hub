import React from 'react'
import { useState } from 'react'
import SearchBar from '../../atoms/searchBar'
import { filters } from '../../utils/constant'
import { CgProfile } from "react-icons/cg";
import logo from '../../asset/images/logo.png'
import './style.css'


const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (e) => {
      setSearchValue(e.target.value)
      console.log('e.target.value: ', e.target.value);
    }
    return (
        <nav>
            <img className='company-logo' src={logo} alt='company-logo'/>
            <div className="filters">
              {filters?.map((item, index) => (
                <div className="filter" key={index}>{item.title}</div>
              ))}
            </div>
            <div className="search-bar">
                <SearchBar value = {searchValue} setValue = {handleSearch} />
            </div>
            <div className="profile">
              <CgProfile/>
            </div>
        </nav>
    )
}

export default Navbar