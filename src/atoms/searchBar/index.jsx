import React, { Fragment } from 'react'
import './style.css'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({
    value,
    setValue,
    disabled = false,
    required = false,
    placeholder = 'Search...'
}) => {
    return (
        <div id='input-wrapper'>
            <CiSearch />
            <input
                type={'text'}
                placeholder={placeholder}
                value={value}
                onChange={setValue}
                disabled={disabled}
                required={required}
            />
        </div>
    )
}

export default SearchBar;