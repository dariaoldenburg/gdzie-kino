import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InlineLoading } from 'components/loading';
import { FilmListElement } from 'components/film.list.element';
import {
  filmsLoad,
  filmsLoadCancelled,
} from 'store/films';


class _FilmList extends React.Component {
  static propTypes = {
    isBeingLoaded: PropTypes.bool.isRequired,
    films: PropTypes.array.isRequired,
    filmsLoad: PropTypes.func.isRequired,
    filmsLoadCancelled: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.filmsLoad();
  }

  componentWillUnmount() {
    this.props.filmsLoadCancelled();
  }

  render() {
    // const { isBeingLoaded, films } = this.props;
    const { films, search } = this.props;
    const isBeingLoaded = false;

    const filteredFilms = search
      ? films.filter((film) => film.title && film.title.toLowerCase().replace(/\s/g, '').includes(search.toLowerCase().replace(/\s/g, '')))
      : films;

    return (
      <div className="film-list">
        {
          filteredFilms.length > 0
            ? filteredFilms.map((film) => <FilmListElement key={ film.id } film={ film } />)
            : <h2 className="film-list__lack-of-results">Brak wyników</h2>
        }
        {
          isBeingLoaded && (
            <div className="film-list__loading d-flex justify-content-center align-items-center">
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
    films: state.films.collection,
    isBeingLoaded: state.films.isBeingLoaded,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filmsLoad: () => dispatch(filmsLoad()),
    filmsLoadCancelled: () => dispatch(filmsLoadCancelled()),
  };
};

const FilmList = connect(mapStateToProps, mapDispatchToProps)(_FilmList);

export { FilmList };
