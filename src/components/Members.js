import React from "react"
import styled from 'styled-components'

const Member = styled.div`
    width: 100%;
    margin: 30px 0;
    padding: 10px;
    background: gray;
    color: white;
    display:flex;
    justify-content: space-between;
`

const ListContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;

`

const Members = (props) => {
    return (
        <ListContainer>
            {props.members.map( (item, i) => (
                <Member key={i}>
                    <span>{`Name: ${item.name}`}</span>
                    <span>{`Email: ${item.email}`}</span>
                    <span>{`Role: ${item.role}`}</span>
                </Member>
            ))}
        </ListContainer>
    )
   
}

export default Members