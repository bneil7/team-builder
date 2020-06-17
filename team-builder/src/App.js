import React, {useState} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Member from './components/Member';
import Form from './components/Form';

const initialFormValues = {
  name:"",
  email:"",
  role: ""
}

function App() {

  const [memberList, setMemberList] = useState([
    {
    id:uuid(),
    name: "Brandon",
    email: "brandon@email.gov",
    role: "frontend"
    },
    {
      id:uuid(),
      name: "Joe",
      email: "joe@email.net",
      role: "backend"
    },
    {
      id:uuid(),
      name: "Jane",
      email: "jane@email.org",
      role: "designer"
      },
  ])

  const [error, setError] = useState(" ")
  const [formValues, setFormValues] = useState(initialFormValues)
  const onInputChange = event => {
    const {name, value} = event.target
      setFormValues({...formValues, [name]:value})
  }
  const onSubmit = event => {
      event.preventDefault()
      if(!formValues.name || !formValues.email || !formValues.role) {
        setError('ALL FIELDS REQUIRED')
        alert('please fill out all fields')
        return
      }
      const addMember = {
        id: uuid(),
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
      }

      setMemberList(memberList => [addMember, ...memberList])
      setFormValues(initialFormValues)
  }

  return (
    <div className="Team Members App">
      <h1>Team Members App</h1>
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <p>{error}</p>
      <br/>
      <h2>Here's the team:</h2>
      {memberList.map(member => {
        return(
          <Member key={member.id} details={member}/>
        )
      })}
    </div>
  );
}

export default App;
