import React from 'react';
import { any, bool, func, string } from 'prop-types';
import cx from 'classnames';


const MaterialInput = ({ className, invalid = false, name, onChange, type='text', value }) => (
  <div className={ cx('material-input', className, { 'material-input--invalid': invalid }) }>
    <input
      required
      className="material-input__input"
      name={ name }
      type={ type }
      onChange={ onChange }
      value={ value }
      autoComplete="off"
      readOnly={ true }
      onFocus={ (event) => event.target.removeAttribute('readonly') }
    />
    <div className={cx('material-input__warning-icon', { 'material-input__warning-icon--visible': invalid })}>
      <i className="fas fa-exclamation"></i>
    </div>
    <div className="material-input__border"></div>
    <label className="material-input__label" htmlFor={ name }>{ name }</label>
  </div>
);

MaterialInput.propTypes = {
  className: string,
  invalid: bool,
  name: string.isRequired,
  onChange: func.isRequired,
  type: string,
  value: any.isRequired,
};

export { MaterialInput };
