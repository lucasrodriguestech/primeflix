import axios from 'axios';

// 20230730155146
// https://api.themoviedb.org/3/movie/now_playing?api_key=83d1116c94714a859522ffdaf514a758&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;