import { combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { takeUntil } from 'rxjs/operator/takeUntil';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { map } from 'rxjs/operator/map';
import { _catch } from 'rxjs/operator/catch';

import { ajax } from '../../utils/ajax';

import {
  favoritesLoadError,
  favoritesLoadSuccess,
  filmsLoadError,
  filmsLoadSuccess,
} from './films.actions';
import {
  FAVORITES_LOAD,
  FAVORITES_LOAD_CANCELLED,
  FILMS_LOAD,
  FILMS_LOAD_CANCELLED,
} from './films.constans';

// TODO: Mocked response
const FILMS_MOCK_RESPONSE = [
  {
    genre: 'Sci-Fi',
    id: 1,
    isFavourite: true,
    posterUrl: 'https://imgix.ttcdn.co/i/product/original/0/538386-d7696c5a7b834420aa8cf7dbacd15a88.jpeg?q=100&auto=format%2Ccompress&w=500',
    rating: 6.9,
    title: 'Blade Runner 2049',
    showings: [ '16:15', '17:25', '18:15', '19:25' ],
  },
  {
    genre: 'Sci-Fi',
    id: 2,
    isFavourite: false,
    posterUrl: 'https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    rating: 6.9,
    title: 'Guardians of the Galaxy vol. 2',
    showings: [ '18:30', '21:30', '18:00', '20:45' ],
  },
  {
    genre: 'Sci-Fi',
    id: 3,
    isFavourite: false,
    posterUrl: 'https://image.gala.de/21443692/2x3-300-450/ef6e576beadd669983cfbf1bfbe2bacc/JF/19--hohn-und-spott-fuer-erstes-filmposter---2-3---spoton-article-681363.jpg',
    rating: 7.7,
    title: 'Tomb Raider',
    showings: [ '17:30', '22:45', '17:00', '20:15' ],
  },
  {
    genre: 'Akcja',
    id: 4,
    isFavourite: true,
    posterUrl: 'http://www.efilmy.tv/images/thumbs/big/13210b2761734e310d42dd00d213e5b4.jpg',
    rating: 6.1,
    title: 'Rampage: Dzika furia',
    showings: [ '16:25', '22:45', '18:00', '21:15' ],
  },
  {
    genre: 'Komedia, Akcja, Sci-Fi',
    id: 5,
    isFavourite: true,
    posterUrl: 'http://1.fwcdn.pl/po/04/29/760429/7840533.3.jpg',
    rating: 9.5,
    title: 'Deadpool 2',
    showings: [ '18:30', '21:45', '17:30', '22:15' ],
  },
];
const FAVORITES_MOCK_RESPONSE = [
  {
    genre: 'Sci-Fi',
    id: 1,
    isFavourite: true,
    posterUrl: 'https://imgix.ttcdn.co/i/product/original/0/538386-d7696c5a7b834420aa8cf7dbacd15a88.jpeg?q=100&auto=format%2Ccompress&w=500',
    rating: 6.9,
    title: 'Blade Runner 2049',
    showings: [ '16:15', '17:25', '18:15', '19:25' ],
  },
  {
    genre: 'Komedia, Akcja, Sci-Fi',
    id: 5,
    isFavourite: true,
    posterUrl: 'http://1.fwcdn.pl/po/04/29/760429/7840533.3.jpg',
    rating: 9.5,
    title: 'Deadpool 2',
    showings: [ '18:30', '21:45', '17:30', '22:15' ],
  },
];

const filmsDataEpic = (action$) => {
  return action$.ofType(FILMS_LOAD)
    ::mergeMap(() => {
      return ajax({
        method: 'GET',
        // url: `/api/getMovies`, TODO: Valid endpoint
        url: `/api/testEndpoint`,
      })
        ::map(() => filmsLoadSuccess(FILMS_MOCK_RESPONSE))
        ::_catch((error) => of(filmsLoadError(error.message || error)));
    })
    ::takeUntil(action$.ofType(FILMS_LOAD_CANCELLED));
};

const favoritesDataEpic = (action$) => {
  return action$.ofType(FAVORITES_LOAD)
    ::mergeMap(() => {
      return ajax({
        method: 'GET',
        // url: `/api/getMovies`, TODO: Valid endpoint
        url: `/api/testEndpoint?get="favorites"`,
      })
        ::map(() => favoritesLoadSuccess(FAVORITES_MOCK_RESPONSE))
        ::_catch((error) => of(favoritesLoadError(error.message || error)));
    })
    ::takeUntil(action$.ofType(FAVORITES_LOAD_CANCELLED));
};

const filmsEpic = combineEpics(
  favoritesDataEpic,
  filmsDataEpic,
);

export { filmsEpic };
