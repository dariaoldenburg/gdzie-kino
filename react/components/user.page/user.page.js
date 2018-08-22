import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  modalOpen,
  MODAL_CHANGE_EMAIL,
  MODAL_CHANGE_PASSWORD,
} from '../../store/modals';


const UserPageButton = ({ callback, icon, text }) => (
  <div className="user-page__button-section d-flex justify-content-center align-items-center">
    <div className="user-page__button-icon d-flex justify-content-center align-items-center">
      { icon }
    </div>
    <div onClick={ callback } className="user-page__button-text d-flex justify-content-center align-items-center">{ text }</div>
  </div>
);

UserPageButton.propTypes = {
  callback: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

const _UserPage = ({ isLogged, openChangeEmailModal, openChangePasswordModal }) => (
  <div className="user-page">
    <div className="user-page__title-section">
      { isLogged ? 'Ustawienia konta' : 'Musisz się zalogować' }
    </div>

    {
      isLogged && [
        (<UserPageButton key="email" callback={ openChangeEmailModal } icon={ (<i className="fas fa-envelope"></i>) } text="Zmień adres email" />),
        (<UserPageButton key="password" callback={ openChangePasswordModal } icon={ (<i className="fas fa-key"></i>) } text="Zmień hasło" />),
      ]
    }

    {
      isLogged
        ? (<div className="user-page__logout-button d-flex justify-content-center align-items-center">Wyloguj</div>)
        : (<div className="user-page__logout-button d-flex justify-content-center align-items-center">Zaloguj się</div>)
    }
  </div>
);

_UserPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  openChangeEmailModal: PropTypes.func.isRequired,
  openChangePasswordModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {
    isLogged: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openChangeEmailModal: () => dispatch(modalOpen(MODAL_CHANGE_EMAIL)),
    openChangePasswordModal: () => dispatch(modalOpen(MODAL_CHANGE_PASSWORD)),
  };
};

const UserPage = connect(mapStateToProps, mapDispatchToProps)(_UserPage);

export { UserPage };
