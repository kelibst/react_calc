import React from 'react'
import PropTypes from "prop-types";



 function SetButton(props) {
    console.log(props)
    const {name, color, wide} = props
    const cl = `${wide ? `flex ${color}` : `${color}`}`
    return (
        <button type="button" className={cl}>{name}</button>
    )
}
SetButton.defaultProps = {
    color: 'orange',
}
SetButton.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    wide: PropTypes.bool.isRequired
}

export default SetButton