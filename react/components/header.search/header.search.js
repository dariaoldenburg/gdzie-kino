import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchUpdate, searchClear } from '../../store/search';


class _HeaderSearch extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    searchClear: PropTypes.func.isRequired,
    searchUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isInputFocused: false,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTextRemove = this.handleTextRemove.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  componentWillUnmount() {
    this.props.searchClear();
  }

  handleSearchChange(e) {
    this.props.searchUpdate(e.target.value);
  }

  handleTextRemove() {
    this.props.searchClear();
  }

  handleInputFocus() {
    this.setState({
      isInputFocused: true,
    });
  }

  handleInputBlur() {
    this.setState({
      isInputFocused: false,
    });
  }

  render() {
    const { isInputFocused } = this.state;
    const { isMobile, search } = this.props;

    return (
      <div className="header-search d-flex align-items-center">
        <input
          autoFocus={ isMobile }
          className="header-search__input"
          type="text" placeholder="Szukaj..."
          value={ search }
          onChange={ this.handleSearchChange }
          onFocus={ this.handleInputFocus }
          onBlur={ this.handleInputBlur }
        />
        <div className={ cx('header-search__input-border', {
          'header-search__input-border--visible': isInputFocused,
        }) }></div>
        {
          search &&
            (
              <div className="header-search__remove-text-box" onClick={ this.handleTextRemove }>
                <i className="header-search__remove-icon fas fa-times" />
              </div>
            )
        }
      </div>
    );
  }


}
const mapStateToProps = (state) => {
  return {
    isMobile: state.app.isMobile,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUpdate: (search) => dispatch(searchUpdate(search)),
    searchClear: () => dispatch(searchClear()),
  };
};

const HeaderSearch = connect(mapStateToProps, mapDispatchToProps)(_HeaderSearch);


export { HeaderSearch };
