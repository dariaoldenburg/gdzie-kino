import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderSearch } from '../header.search';


const HeaderDesktop = () => (
  <div className="header-desktop">
    <div className="header-desktop__wrapper d-flex align-items-center">
      <div className="header-desktop__logo-box d-flex align-items-center justify-content-center">
        <i className="fab fa-accusoft" />
        <span className="header-desktop__logo-title">Gdzie kino</span>
      </div>

      <div className="header-desktop__separator"></div>

      <div className="header-desktop__search-box d-flex justify-content-center align-items-center">
        <div className="header-desktop__search-input-container">
          <HeaderSearch />
        </div>
      </div>

      <div className="header-desktop__right-panel d-flex align-items-center justify-content-between">
        <Link to="/konto">
          <i className="fas fa-user" />
        </Link>
        <div className="header-desktop__separator"></div>
        <Link to="/kina">
          <i className="fas fa-video" />
        </Link>
        <i className="fas fa-heart" />
      </div>
    </div>
  </div>
);

export { HeaderDesktop };
