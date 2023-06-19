import { useState } from "react";
import css from './Serchbar.module.css';
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";

export const Searchbar = ({onSubmit}) => {
  const [photoText, setPhotoText] = useState('')
   
  const handlePhotoTextChange = e => {
    const { value } = e.currentTarget;
     setPhotoText(value.toLowerCase())
    };

 const handleSubmit = e => {
    e.preventDefault();
    if (photoText.trim() === '') {
      alert('Будласка заповніть форму.');
      return;
    }
    onSubmit(photoText);
    };

    
        return <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button className={css.SearchFormButton} type="submit">
              <CiSearch style={{
                width: 40,
                height: 25,
              }} />
    </button>
            <input
              className={css.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      value={photoText}
      onChange={handlePhotoTextChange}
    />
  </form>
</header>
    }


Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
}