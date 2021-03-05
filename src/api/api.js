import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const filmsAPI = {
  getPopularFilms() {
    return instance
      .get(`movie/popular/?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
  getGenresFilms() {
    return instance
      .get(`genre/movie/list?api_key=74d41124b9d3bafd09d832463dd78216`)
      .then(({ data }) => {
        return data;
      });
  },
};
