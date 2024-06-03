import React from 'react';
import TopRated from '../../components/movies/topRated';
import { MdCancel } from "react-icons/md";
import './styles.css'

const Modal = ({ children, onClose}) => {
    return(
        <div className='modal-container'>
            <div className="children">
            <div onClick={onClose} className="cancel"><MdCancel/></div>
              {children}
            </div>
        </div>
    )
}

export default Modal;