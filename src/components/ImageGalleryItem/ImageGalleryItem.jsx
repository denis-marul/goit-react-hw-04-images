import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({image}) => {
  const [showModal, setShowModal]= useState(false)

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return <>
    <>{showModal && <Modal
      onClose={toggleModal}
      largeImageURL={image.largeImageURL}
    alt={image.tags}
    />}</>
    <li className={css.ImageGalleryItem} onClick={toggleModal}>
  <img className={css.ImageGalleryImage} src={image.webformatURL} alt={image.tags} />
</li></>}


ImageGalleryItem.protoTypes = {
  image: PropTypes.object.isRequired,
}

