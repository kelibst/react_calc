import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { res } = props;
  return (
    <div className="disContainer">
      <input type="text" value={res} />
    </div>
  );
}

// the default value
Display.defaultProps = {
  res: '0',
};
// the result from the props should be a string
Display.propTypes = {
  res: PropTypes.string,
};

export default Display;
