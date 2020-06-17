import React from 'react'

export default function Form(props){

    const{
        values,
        onInputChange,
        onSubmit
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>Add Member Name: &nbsp;
                    <input type='text' name='name' value={values.name} placeholder='Name' onChange={onInputChange}/>
                </label>
                <br/>
                <br/>
                <label htmlFor='emailAddress'>Add Member Email Address: &nbsp;
                    <input id='emailAddress' type='email' name='email' value={values.email} placeholder='Email' onChange={onInputChange}/>
                </label>
                <br/>
                <br/>
                <label>Add Member Role: &nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value='--' />
                        <option value='frontend'>Front End Dev</option>
                        <option value='backend'>Back End Dev</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>
                <br/>
                <br/>
                <button>SUBMIT</button>
            </div>
        </form>
    )
}