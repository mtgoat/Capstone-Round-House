import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Row, Col, Image, Form, Button, Modal, Container } from 'react-bootstrap';

export const Login = (props) => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()

    const navigate = useNavigate() //now needs to be navigate and useNaviagte()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("activeUser", exists.id)
                    props.setLoggedin(true)
                    navigate("/") // change to navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <Button variant="primary" className="button--close" onClick={e => existDialog.current.close()}>Close</Button>
            </dialog>

            <section>
                <div as={Row}>
                <Image column sm="2"src={require('../../img/Logo192.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/>
                <Col sm="10">
                <h1 >Round House</h1>
                </Col>
            </div>

                <Form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in</h2>
                    <Form.Group as={Row}>
                        <Form.Label sm="2" htmlFor="inputEmail"> Email address </Form.Label>
                        <Col sm="10">
                        <Form.Control ref={email} type="email"
                            id="email"
                            className="mb-3 form-control"
                            placeholder="Email address"
                            required autoFocus /></Col>
                     </Form.Group>
                        <Button className="mb-3" type="submit">
                            Sign in
                        </Button>
                </Form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

