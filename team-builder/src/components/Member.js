import React from 'react';

const Member = (props) => {
    return(
        <div>
            <h3 className='name'>Name: {props.details.name}</h3>
            <p className='email'>Email: {props.details.email}</p>
            <p className='role'>Role: {props.details.role}</p>
        </div>
    )
}

export default Member;