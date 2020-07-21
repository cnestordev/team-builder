import React from 'react'
import Member from './Member'

function Team(props) {
    const memberList = props.members.map(obj => {
        return <Member key={obj.id} obj={obj} />
    })

    return (
        <div>
            {memberList}
        </div>
    )
}

export default Team