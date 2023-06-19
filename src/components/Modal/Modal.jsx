import css from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, largeImageURL, alt }) => {
  
  useEffect(() => {
    const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose(); 
    }
  };
    window.addEventListener('keydown', handleKeyDown); 
    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
    }
  },[onClose])

  
    const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose(); 
    }
  };

   
    return createPortal(<div onClick={handleBackdropClick} className={css.Overlay}>
  <div  className={css.Modal}>
    <img src={largeImageURL} alt={alt} />
  </div>
</div>, modalRoot,)}


Modal.protoTypes = {
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
