import {
  FILMS_LOAD,
  FILMS_LOAD_CANCELLED,
  FILMS_LOAD_ERROR,
  FILMS_LOAD_SUCCESS,
  FAVORITES_LOAD,
  FAVORITES_LOAD_CANCELLED,
  FAVORITES_LOAD_ERROR,
  FAVORITES_LOAD_SUCCESS,
} from './films.constans';

const favoritesLoad = () => ({
  type: FAVORITES_LOAD,
});

const favoritesLoadCancelled = () => ({
  type: FAVORITES_LOAD_CANCELLED,
});

const favoritesLoadError = (error) => ({
  type: FAVORITES_LOAD_ERROR,
  payload: {
    error,
  },
});

const favoritesLoadSuccess = (collection) => ({
  type: FAVORITES_LOAD_SUCCESS,
  payload: {
    collection,
  },
});

const filmsLoad = () => ({
  type: FILMS_LOAD,
});

const filmsLoadCancelled = () => ({
  type: FILMS_LOAD_CANCELLED,
});

const filmsLoadError = (error) => ({
  type: FILMS_LOAD_ERROR,
  payload: {
    error,
  },
});

const filmsLoadSuccess = (collection) => ({
  type: FILMS_LOAD_SUCCESS,
  payload: {
    collection,
  },
});

export {
  favoritesLoad,
  favoritesLoadCancelled,
  favoritesLoadError,
  favoritesLoadSuccess,
  filmsLoad,
  filmsLoadCancelled,
  filmsLoadError,
  filmsLoadSuccess,
};
