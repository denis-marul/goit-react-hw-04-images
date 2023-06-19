import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import  fetchPhotos  from 'components/services/PhotosApi';
import { Loader } from 'components/Loader/Loader';
import css from './App.module.css';

export const App = () => {

  const [text, setText] = useState('')
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showBtn, setShowBtn] = useState(false)

  
  useEffect(() => {
    if (text === '') {
      return
    }
    setLoading(true)
    fetchPhotos(text, page)
      .then(images => {
        setPhotos(prevState => [...prevState, ...images.hits])
        setShowBtn(page < Math.ceil(images.totalHits / 12))
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [text, page]);

  const handleFormSubmit = photoText => {
    setText(photoText)
    setPage(1)
    setPhotos([])
  }

  const onMore = () => {
    setPage(prev => prev + 1)
  };

    return(
      <div className={css.App}>
        <Searchbar onSubmit={handleFormSubmit} />
        {error && <h1>Something went wrong.</h1>}
        
        <ImageGallery
        images={photos}
        />
        <Loader loading={loading}/>
        <Button showBtn={showBtn} photos={photos} click={onMore} />
    </div>
  );
};



