export const baseUrl = 'https://api.themoviedb.org/3';
export const apiKey = '570ac6021195c470d9e4bf2b4864044e';
export const genreUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`;
export const movieList = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;