import React from 'react';
import TopRated from '../../components/movies/topRated';
import './styles.css'

const Modal = ({ children, open, setOpen}) => {
    return(
        <div className='modal-container'>
            {children}
        </div>
    )
}

export default Modal;