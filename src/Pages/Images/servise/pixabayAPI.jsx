const axios = require('axios').default;


     const API_KEY = "11289051-48d12590e82ce4f1f9b0e3f91";
 const fetchImages = async (imageName, page) => {
    const response = await axios.get(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return response.data.hits;
}
export default fetchImages