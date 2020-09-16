import React from 'react';
import PropTypes from 'prop-types';

function SetButton(props) {
  const {
    name, color, wide, handleClick,
  } = props;
  const cl = `${wide ? `flex ${color}` : `${color}`}`;
  return (
    <button type="button" className={cl} onClick={() => handleClick(name)}>{name}</button>
  );
}
SetButton.defaultProps = {
  color: 'orange',
};
SetButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SetButton;
