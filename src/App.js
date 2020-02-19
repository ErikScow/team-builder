import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Form from './components/Form'
import Members from'./components/Members'

const Title = styled.h1`
  text-align:center;
`

function App() {

//an array of member obj
const [teamMembers, setTeamMembers] = useState([
  {
    id: 1,
    name: 'Erik Scow',
    email:'erikscow@gmail.com',
    role:'Frontend Developer'
  }
]) 

const addMember = member => {
  const newMember = {
    id: member.id,
    name: member.name,
    email: member.email,
    role: member.role
  }

  setTeamMembers([...teamMembers, newMember])
}

  return(
    <div>
      <Title>The Team</Title>
      <Form addMember={addMember}/>
      <Members members={teamMembers}/>
    </div>
    
    )
}

export default App;
