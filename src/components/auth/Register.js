import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Form, Button, Row, Col, Image } from 'react-bootstrap';

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            firstName: `${firstName.current.value}`,
                            lastName: `${lastName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("activeUser", createdUser.id)
                                props.setLoggedin(true)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <>
            <div as={Row}>
            <Image column sm="2"src={require('../../img/Logo192.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/>
            <Col sm="10">
            <h1 className="h3 mb-3 font-weight-normal">Please Register for Round House</h1>
            </Col>
            </div>

            <Form className="mb-3 form--Regi " onSubmit={handleRegister}>
            
                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="firstName"> First Name </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={firstName} type="text" className="mb-3 form-control" placeholder="First name" required autoFocus/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="lastName"> Last Name </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={lastName} type="text" name="lastName" className="mb-3 form-control" placeholder="Last name" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" htmlFor="inputEmail"> Email address </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={email} type="email" name="email" className="mb-3 form-control" placeholder="Email address" required />
                    </Col>
                    <Form.Text className="mb-3 text-muted"> We'll never share your information with anyone else </Form.Text>
                </Form.Group>

                    <Button variant="primary" type="submit" className="mb-3"> Register and Sign in </Button>
                
            </Form>
            </>
        </main>
    )
}
