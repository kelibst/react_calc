import React from 'react'
import PropTypes from 'prop-types'
function DisplayPanel(props) {
    const { res } = props;
    
    return (
        <div className="disContainer">
           <p>{res}</p>
        </div>
    )
}

//the default value
DisplayPanel.defaultProps = {
    res: '0'
}
//the result from the props should be a string
DisplayPanel.propTypes = {
    res: PropTypes.string
}

export default  DisplayPanel