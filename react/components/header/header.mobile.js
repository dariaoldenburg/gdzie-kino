import React from 'react';

import { HeaderSearch } from '../header.search';


class HeaderMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearchVisible: false };

    this.handleShowSearchInput = this.handleShowSearchInput.bind(this);
  }

  handleShowSearchInput() {
    this.setState({
      isSearchVisible: !this.state.isSearchVisible,
    });
  }

  render() {
    const { isSearchVisible } = this.state;

    return (
      <div className="header-mobile d-flex align-items-center">
        <div className="header-mobile__logo-box d-flex align-items-center justify-content-center">
          <i className="fab fa-accusoft" />
          <span className="header-mobile__logo-title">Gdzie kino</span>
        </div>

        <div className="header-mobile__search-box d-flex justify-content-center align-items-center" onClick={ this.handleShowSearchInput }>
          { !isSearchVisible && <span>
            <i className="fas fa-search" />
          </span> }
          { isSearchVisible && <span className="header-mobile__filter-icon-big">
            <i className="fas fa-angle-left" />
          </span> }
        </div>

        {
          !isSearchVisible && (
            <div className="header-mobile__filter-box">
              <i className="header-mobile__filter-icon fas fa-filter" />
            </div>
          )
        }

        {
          isSearchVisible && (
            <div className="header-mobile__search-input-container">
              <HeaderSearch />
            </div>
          )
        }
      </div>
    );
  }
}

export { HeaderMobile };
