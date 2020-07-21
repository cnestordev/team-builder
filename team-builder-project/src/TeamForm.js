import React from 'react'

function TeamForm(props) {
    return (
        <div className="form-container">
            <form>
                <input onChange={props.handler} value={props.formData.name} type="text" name="name" placeholder="first name" id="name" />
                <input onChange={props.handler} value={props.formData.email} type="email" name="email" placeholder="Email" id="email" />
                <label htmlFor="cars">Choose a car:</label>
                <select onChange={props.handler} value={props.formData.role} id="role" name="role">
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UI">UI</option>
                    <option value="CS">Computer Science</option>
                </select>
                <button onClick={props.submit}>Submit</button>
            </form>
        </div>
    )
}

export default TeamForm