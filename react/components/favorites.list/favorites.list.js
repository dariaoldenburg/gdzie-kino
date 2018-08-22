import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InlineLoading } from 'components/loading';
import { FilmListElement } from 'components/film.list.element';
import {
  favoritesLoad,
  favoritesLoadCancelled,
} from 'store/films';


class _FavoritesList extends React.Component {
  static propTypes = {
    isBeingLoaded: PropTypes.bool.isRequired,
    favorites: PropTypes.array.isRequired,
    favoritesLoad: PropTypes.func.isRequired,
    favoritesLoadCancelled: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.favoritesLoad();
  }

  componentWillUnmount() {
    this.props.favoritesLoadCancelled();
  }

  render() {
    // const { isBeingLoaded, films } = this.props;
    const { isBeingLoaded, favorites, search } = this.props;

    const filteredFavorites = search
      ? favorites.filter((film) => film.title && film.title.toLowerCase().replace(/\s/g, '').includes(search.toLowerCase().replace(/\s/g, '')))
      : favorites;

    return (
      <div className="favorites-list">
        <div className="favorites-list__title">Ulubione <i className="fas fa-heart footer__box-icon favorites-list__title-icon" /></div>
        {
          filteredFavorites.length > 0
            ? filteredFavorites.map((film) => <FilmListElement key={ film.id } film={ film } />)
            : <h2 className="favorites-list__lack-of-results">Brak wyników</h2>
        }
        {
          isBeingLoaded && (
            <div className="favorites-list__loading d-flex justify-content-center align-items-center">
              <InlineLoading />
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.films.favorites,
    isBeingLoaded: state.films.isBeingLoaded,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoritesLoad: () => dispatch(favoritesLoad()),
    favoritesLoadCancelled: () => dispatch(favoritesLoadCancelled()),
  };
};

const FavoritesList = connect(mapStateToProps, mapDispatchToProps)(_FavoritesList);

export { FavoritesList };
