import React from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authPasswordRemind } from 'store/auth';
import { isEmail } from 'utils/validators';
import { MaterialInput } from 'components/material.input';

class _RemindPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
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
    const { email } = this.state;
    const { remindPassword } = this.props;

    remindPassword(email);
  }

  render() {
    const { email } = this.state;
    const { error } = this.props;

    const isEmailInvalid = email !== '' && !isEmail(email);

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
            <MaterialInput invalid={ isEmailInvalid } className="login-page__input" name="email" onChange={(e) => this.handleInputChange('email', e.target.value)} value={email}/>
          </div>
          <button
            disabled={!email || isEmailInvalid}
            onClick={this.handleSubmit}
            className="login-page__submit d-flex justify-content-center align-items-center"
          >
            Przypomnienie hasła
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

_RemindPasswordPage.propTypes = {
  error: string,
  remindPassword: func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
  remindPassword: (email) => dispatch(authPasswordRemind(email)),
});


const RemindPasswordPage = connect(mapStateToProps, mapDispatchToProps)(_RemindPasswordPage);

export { RemindPasswordPage };
