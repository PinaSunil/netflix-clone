const key =import.meta.env.VITE_REACT_APP_TMDB_API_KEY

const requests = {
  requestNetflixOriginal:`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAnimation:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
};

export default requests