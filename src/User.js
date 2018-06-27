import React, { Component } from 'react'

const User = (props) => {
    return (
        <div className="user" style = {props.style}>
            {props.displayName}
        </div>
    )
}

export default User