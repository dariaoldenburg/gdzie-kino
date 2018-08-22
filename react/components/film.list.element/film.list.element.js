import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const FilmListElement = ({ film }) => {
  const { genre, id, isFavourite, posterUrl, rating, title, showings } = film;

  return (
    <div className="film-list-element d-flex align-items">
      <Link to={ `/film/${ id }` }>
        <div className="film-list-element__poster" style={{ backgroundImage: `url(${posterUrl})` }} ></div>
      </Link>
      <div className="film-list-element__description">
        <div className="film-list-element__top">
          <Link className="film-list-element__title" to={ `/film/${ id }` }>
            { title }
          </Link>
          <div className="film-list-element__isFavourite">
            { isFavourite ? <i className="fas fa-heart" /> : <i className="far fa-heart" /> }
          </div>
        </div>
        <div className="film-list-element__showing-section d-flex flex-wrap">
          <div className="film-list-element__showing-block d-flex align-items-center justify-content-center">{showings[0]}</div>
          <div className="film-list-element__showing-block d-flex align-items-center justify-content-center">{showings[1]}</div>
          <div className="film-list-element__showing-block d-flex align-items-center justify-content-center">{showings[2]}</div>
          <div className="film-list-element__showing-block d-flex align-items-center justify-content-center">{showings[3]}</div>
        </div>
        <div className="film-list-element__genre">
          { genre }
        </div>
        <div className="film-list-element__bottom d-flex">
          <div className="film-list-element__rating">
            { rating }
          </div>
          <div className="film-list-element__star">
            <i className="fas fa-star" />
          </div>
        </div>

      </div>
    </div>
  );
};

FilmListElement.propTypes = {
  film: PropTypes.object.isRequired,
};

export { FilmListElement };
