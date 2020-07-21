import React from 'react'
import color from 'randomcolor'

function Member(props) {
    const { name, email, role } = props.obj

    return (
        <div style={{ background: color() }} className="member-container">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}

export default Member