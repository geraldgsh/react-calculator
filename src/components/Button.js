import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, half } = props;

  return (
    <button className="buttons" type="button" style={styling}>
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
