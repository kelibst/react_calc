import React from 'react'
import PropTypes from "prop-types";



 function SetButton(props) {

    const {name} = props
    
    return (
        <button type="button">{name}</button>
    )
}
SetButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default SetButton