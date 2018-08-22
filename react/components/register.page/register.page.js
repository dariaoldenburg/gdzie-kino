import React from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authRegister } from 'store/auth';
import { isEmail } from 'utils/validators';
import { MaterialInput } from 'components/material.input';

class _RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordAgain: '',
    };

    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { email, password } = this.state;
    const { registerUser } = this.props;

    registerUser(email, password);
  }

  render() {
    const { email, password, passwordAgain } = this.state;
    const { error } = this.props;

    const isEmailInvalid = email !== '' && !isEmail(email);
    const isPasswordAgainInvalid = passwordAgain !== '' && password !== passwordAgain;

    const buttonEnabled =
      email &&
      password &&
      passwordAgain &&
      (!isEmailInvalid && !isPasswordAgainInvalid);

    return (
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="login-page__box">
          <div className="login-page__logo d-flex justify-content-center align-items-center">
            <i className="login-page__logo-icon fas fa-street-view" />
          </div>
          <div className="login-page__error">
            { error && <i className="login-page__error-icon fas fa-exclamation-triangle"></i> }
            { error }
          </div>
          <div className="login-page__inputs">
            <MaterialInput type={ 'email' } invalid={ isEmailInvalid } className="login-page__input" name="email" onChange={(e) => this.handleInputChange('email', e.target.value)} value={email}/>
            <MaterialInput type={ 'password' } className="login-page__input" name="password" onChange={(e) => this.handleInputChange('password', e.target.value)} value={password}/>
            <MaterialInput type={ 'password' } invalid={ isPasswordAgainInvalid } className="login-page__input" name="passwordAgain" onChange={(e) => this.handleInputChange('passwordAgain', e.target.value)} value={passwordAgain}/>
          </div>
          <button
            disabled={!buttonEnabled}
            onClick={this.handleSubmit}
            className="login-page__submit d-flex justify-content-center align-items-center"
          >
            Rejestracja
          </button>
          <div className="login-page__register-title">Masz już konto?</div>
          <Link to="/logowanie">
            <div role="button" className="login-page__register-link">Logowanie</div>
          </Link>
        </div>
      </div>
    );
  }
}

_RegisterPage.propTypes = {
  error: string,
  registerUser: func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
  registerUser: (email, password) => dispatch(authRegister(email, password)),
});


const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(_RegisterPage);

export { RegisterPage };
