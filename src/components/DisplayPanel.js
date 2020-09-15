import React from 'react';
import PropTypes from 'prop-types';

function DisplayPanel(props) {
  const { res } = props;
  return (
    <div className="disContainer">
      <input type="text" value={res} />
    </div>
  );
}

// the default value
DisplayPanel.defaultProps = {
  res: '0',
};
// the result from the props should be a string
DisplayPanel.propTypes = {
  res: PropTypes.string,
};

export default DisplayPanel;
