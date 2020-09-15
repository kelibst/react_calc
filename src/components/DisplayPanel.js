import React from 'react'
import PropTypes from 'prop-types'
function DisplayPanel(props) {
    const { res } = props;
    const {next, total, history} = res
    const disRes = next? next : total;
    console.log(history)
    return (
        <div className="disContainer">
            <p className="history">{history}</p>
            <p>{disRes}</p>
        </div>
    )
}

//the default value
DisplayPanel.defaultProps = {
    res: '0'
}
//the result from the props should be a string
DisplayPanel.propTypes = {
    res: PropTypes.object
}

export default  DisplayPanel