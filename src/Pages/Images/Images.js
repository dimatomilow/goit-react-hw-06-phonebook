import {useState,useEffect} from 'react';

import Searchbar from "./Components/Searchbar/Searchbar";

import fetchImages from './servise/pixabayAPI';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import { ToastContainer,toast} from 'react-toastify';
import Loader from './Components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [modalLargeImage, setModalLargeImage] = useState([]);
  const [modalLargeAlt, setModalLargeAlt] = useState([]);



  useEffect(() => {
    setStatus('pending')
    setImages([])

    fetchImages(imageName, page).then(data => {
      setImages([...data]);
      setStatus('resolved');
    }).catch(error => {
      setError(error);
      setStatus('rejected');
      toast('Error')
    })

  },[imageName,page]);

   const incrementNextPage = () => {
     setPage(page + 1);
  }
 const incrementPrevPage = () => {
   setPage(page > 1 ? page - 1 : 1);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

 const handleOpenModal = (largeImageURL, tags) => {
   toggleModal();
   setModalLargeImage(largeImageURL)
   setModalLargeAlt(tags)
  };

    return (
      <>
          <ToastContainer autoClose={3000}/>
          <Searchbar onSubmit={setImageName} />
          {status === 'idle' ? (<h1>Введите название картинки</h1>) : error}
          {status ==='pending'?(<Loader/>):error}
          {status === 'rejected' ? (<ToastContainer autoClose={3000}/>) : error}
          {images.length >0&&
            (<>
          <ImageGallery imageName={images} onClick={handleOpenModal}/>
          <Button click={incrementPrevPage} text={"prev page"}/>
          <Button click={incrementNextPage} text={"next page"}/>
            </>)}
          {showModal && <Modal src={modalLargeImage} alt={modalLargeAlt} onClose={toggleModal} />}
  </>
    );
  }




