import React from "react"
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

const Form = () => {
    return(
        <FormJSX>
            <label for="name">Name</label>
            <Input
                type='text'
                placeholder='name'
                id='name'
                name='name'
            />
            <label for="email">Email</label>
            <Input
                type='text'
                placeholder='email'
                id='email'
                name='email'
            />
            <label for="role">Role</label>
            <Input
                type='text'
                placeholder='role'
                id='role'
                name='role'
            />
        </FormJSX>
    )
}

export default Form