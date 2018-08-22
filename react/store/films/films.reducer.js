import uniqBy from 'lodash.uniqby';

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

const initialState = {
  isLoaded: false,
  isBeingLoaded: false,
  error: null,
  collection: [],
  favorites: [],
};

const filmsReducer = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case FILMS_LOAD:
    case FAVORITES_LOAD: {
      return {
        ...state,
        isLoaded: false,
        isBeingLoaded: true,
        error: null,
      };
    }

    case FILMS_LOAD_CANCELLED:
    case FAVORITES_LOAD_CANCELLED: {
      return {
        ...state,
        isLoaded: false,
        isBeingLoaded: false,
        error: null,
      };
    }

    case FILMS_LOAD_ERROR:
    case FAVORITES_LOAD_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoaded: true,
        isBeingLoaded: false,
        error,
      };
    }

    case FAVORITES_LOAD_SUCCESS: {
      const { collection } = action.payload;

      const newFavorites = [
        ...state.favorites,
        ...collection,
      ];

      return {
        ...state,
        isLoaded: true,
        isBeingLoaded: false,
        favorites: uniqBy(newFavorites, 'id'),
      };
    }

    case FILMS_LOAD_SUCCESS: {
      const { collection } = action.payload;

      const newCollection = [
        ...state.collection,
        ...collection,
      ];

      return {
        ...state,
        isLoaded: true,
        isBeingLoaded: false,
        collection: uniqBy(newCollection, 'id'),
      };
    }

    default: {
      return state;
    }
  }
};

export { filmsReducer };
