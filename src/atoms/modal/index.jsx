import React from 'react';
import TopRated from '../../components/movies/topRated';
import './styles.css'

const Modal = ({ children}) => {
    return(
        <div className='modal-container'>
            {children}
        </div>
    )
}

export default Modal;