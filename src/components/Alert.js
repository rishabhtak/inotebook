import React from 'react'

function Alert(props) {
    const { message } = props;
    return (
        <div className="alert alert-primary" role="alert">
            {message}
        </div>


    )
}

export default Alert