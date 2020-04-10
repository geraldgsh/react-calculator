import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, half, clickHandler,
  } = props;
  const styling = {
    width: half ? '50%' : '25%',
    background: color,
  };
  return (
    <button
      className="buttons"
      type="button"
      style={styling}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  half: false,
  color: 'orange',
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  half: false,
  color: 'orange',
};

export default Button;
