import React from 'react';
import classnames from 'classnames';  

class FilmDetails extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDotsInDescription = this.toggleDotsInDescription.bind(this);
    this.toggleThumb = this.toggleThumb.bind(this);

    this.state = {
      film: {
        genre: 'Sci-Fi',
        id: 1,
        posterUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png',
        duration: '2 godz. 29 min.',
        rating: 6.9,
        title: 'Blade Runner 2049',
        description: 'Oficer policji Los Angeles trafia na ukrywaną przez lata informację, która może pogrążyć resztki społeczeństwa w chaosie. Odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął trzydzieści lat temu. Odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął trzydzieści lat temu. Odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął trzydzieści lat temu. Odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął trzydzieści lat temu.',
      },
      isDescriptionShortened: true,
      currentThumb: '',
    };
  }

  toggleDotsInDescription() {
    this.setState({ isDescriptionShortened: !this.state.isDescriptionShortened, readMore: !this.state.readMore });
  }

  toggleThumb(direction) {
    const newCurrentThumb = direction === this.state.currentThumb ? '' : direction;
    this.setState({ currentThumb: newCurrentThumb });
  }

  render() {
    const { currentThumb, isDescriptionShortened, film } = this.state;
    const descriptionClass = classnames('film-details__description', { 'film-details__description--dots': isDescriptionShortened });
    
    const thumbUpClass = classnames('film-details__thumb-box like-box', { 'film-details__thumb-box-selected': currentThumb === 'up' });
    const thumbDownClass = classnames('film-details__thumb-box', { 'film-details__thumb-box-selected': currentThumb === 'down' });

    return (
      <div>
        <div className="film-details">
          <div className="d-flex align-items film-details__poster-and-desc">
            <div className="film-details__poster-box" style={{ backgroundImage: `url(${ film.posterUrl })` }}></div>
            <div className="film-details__description-box">
              <h1 className="film-details__title">{ film.title }</h1>
              <h2 className="film-details__genre">{ film.genre }</h2>
              <div className="d-flex align-items">
                <i className="film-details__duration-icon far fa-clock"/>
                <p className="film-details__duration">{ film.duration }</p>
              </div>
              <div className={ descriptionClass } >{ film.description }</div>
              <div>
                <button className="film-details__toggle-desc-btn" onClick={ this.toggleDotsInDescription }>{ isDescriptionShortened ? 'Czytaj więcej' : 'Czytaj mniej' }</button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items film-details__rating-and-like">
            <i className="film-details__rating-icon fas fa-star"/>
            <p className="film-details__rating">{ film.rating }</p>
            <div className="film-details__thumbs d-flex align-items">
              <p className="film-details__watched-question">Film już obejrzany? Oceń!</p>
              <div className={ thumbUpClass } onClick={ () => this.toggleThumb('up') }><i className="film-details__thumb like far fa-thumbs-up"/></div>
              <div className={ thumbDownClass } onClick={ () => this.toggleThumb('down') }><i className="film-details__thumb dislike far fa-thumbs-down"/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { FilmDetails };
