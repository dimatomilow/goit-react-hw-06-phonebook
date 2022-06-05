import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "cdd38ed2e1ff6ec8c3ec0bbc75d0e5fe";

  export async function popularMovies  () {

     const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

    return response.data.results;

}
  export async function fetchMoviesDetails (id) {

     const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);

    return response.data;

}
export async function fetchMoviesCast(id) {

  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);

  return response.data.cast;
}

export async function fetchMoviesReviews(id) {

  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);

  return response.data.results;
}
export async function fetchSearchMoive(quvery) {

  const response = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${quvery}&include_adult=false`);

  return response.data.results;
}