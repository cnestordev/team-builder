import React, { useState } from 'react';
import Team from './Team'
import TeamForm from './TeamForm'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const initialState = {
    name: '',
    email: '',
    role: 'Frontend',
    id: uuidv4()
  }

  const [members, setMembers] = useState([])
  const [query, setQuery] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    setQuery({
      ...query,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (query.name === "" || query.email === "" || query.role === "") {
      console.log("input field left blank")
      return
    }
    const newArr = [...members, { ...query }]
    setMembers(newArr)
    setQuery(initialState)
  }


  return (
    <div className="App">
      <TeamForm formData={query} handler={handleChange} submit={handleSubmit} />
      {members.length > 0 ? <Team members={members} /> : <h2>No members added at this time</h2>}
    </div>
  );
}

export default App;
