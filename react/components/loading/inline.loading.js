import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InlineLoading = ({ className }) => {
  return <i className={ classnames('fas fa-circle-notch fa-spin', className) } aria-hidden="true" />;
};

InlineLoading.propTypes = {
  className: PropTypes.string,
};

InlineLoading.defaultProps = {
  className: '',
};

export { InlineLoading };
