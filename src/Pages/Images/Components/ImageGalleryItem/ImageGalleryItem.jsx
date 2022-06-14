 import React from 'react';
import { ItemStyled,ImageGalleryItemImage } from './ImageGalleryItemStyled';

const ImageGalleryItem = ({image, onClick}) => {
  return image.map(({ id, webformatURL, tags, largeImageURL })=>(
    <ItemStyled key={id} >
      <ImageGalleryItemImage src={webformatURL}
        alt={tags} width={240}
        onClick={() => onClick(largeImageURL, tags)} />
    </ItemStyled>

    ));
}

export default ImageGalleryItem;