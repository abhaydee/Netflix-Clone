import Axios from 'axios';
export const apiBase="https://api.themoviedb.org/3";
export const instance=Axios.create({
    baseURL:apiBase
});

