import React, { useState } from "react"
import styled from 'styled-components'

const FormJSX = styled.form`
    width: 800px;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 300px;
    margin-bottom: 30px;
`

const Dropdown = styled.select`
    width: 300px;
    margin-bottom: 30px;
`



const Form = (props) => {
    //new member object
    const [newMem, setNewMem] = useState({name: '', email: '', role: ''})

    const changeHandler = event => {
        setNewMem({...newMem, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addMember(newMem)
        setNewMem({name: '', email: '', role: ''})
    }

    return(
        <FormJSX onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <Input
                type='text'
                placeholder='name'
                id='name'
                name='name'
                value={newMem.name}
                onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <Input
                type='text'
                placeholder='email'
                id='email'
                name='email'
                value={newMem.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Role</label>
            <Dropdown 
                id='role' 
                name='role'
                onChange={changeHandler}>

                <option value='0'>Choose</option>
                <option value='Designer'>Designer</option>
                <option value='Frontend Developer'>Frontend Developer</option>
                <option value='Backend Developer'>Backend Developer</option>
            </Dropdown>
            <button type='submit'>Add Member</button>
        </FormJSX>
    )
}

export default Form