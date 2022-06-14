import {useState} from 'react';
import {  toast } from 'react-toastify'

export default function Searchbar({onSubmit}) {
  const [imageName, setImageName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      toast.error(' Введите поисковый запрос!');
      return;
    }
    onSubmit(imageName);
    setImageName('');
  }
  const handleChange = e => {
    setImageName(
e.currentTarget.value.toLowerCase()

    )
  };

  return (
      <header>
  <form  onSubmit={handleSubmit}>

    <input
      type="text"
            placeholder="Search images and photos"
            onChange={handleChange}
            value={imageName}
          />
          <button type="submit" >
      <span >Search</span>
    </button>
  </form>
</header>
    );
}


