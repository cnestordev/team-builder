import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    text-align: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubContainer = styled.div`
    display: flex;
`

function Form(props) {

    const { values, change, submit } = props
    return (
        <>
            <FormContainer onSubmit={submit}>
                <SubContainer>
                    <label htmlFor="name">name</label>
                    <input onChange={change} value={values.name} type="text" name="name" id="name" placeholder="first name" />

                    <label htmlFor="email">Email</label>
                    <input onChange={change} value={values.email} type="email" name="email" id="email" placeholder="email" />
                </SubContainer>
                <select onChange={change} value={values.role} name="role" id="role">
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UI">UI</option>
                    <option value="CS">Computer Science</option>
                </select>
                <button>Submit</button>
            </FormContainer>
        </>
    )
}

export default Form