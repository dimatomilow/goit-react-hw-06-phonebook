import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryStyled } from "./ImageGalleryStyled";

const ImageGallery = ( {imageName,onClick} ) => {
    return (
        <GalleryStyled> <ImageGalleryItem  image={imageName} onClick={onClick} /></GalleryStyled>

    );
}

export default ImageGallery;