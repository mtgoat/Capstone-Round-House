// Purpose: log in form
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
            .then(userExists => {
                if (userExists) {
                    localStorage.setItem("react_Roundhouse_user", JSON.stringify(userExists))
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
                <Button variant="success" className="button--close" onClick={e => existDialog.current.close()}>Close</Button>
            </dialog>

            <Container>
                <Row>
                    <Col sm={6}>
                    <section className="left-sign-in">
                
                        <section as={Col} >
                            {/* <div as={Row}>
                            {/* <Image column sm="2"src={require('../../img/Logo192.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/> */}
                                {/* <Col sm="10">
                                <h1 className="title--signIn" >Roundhouse</h1>
                               
                                </Col> */}
                            {/* </div> */} 

                            <Form className="form--signIn" onSubmit={handleLogin}>
                                
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
                                    <Button className="mb-3" variant="success" type="submit">
                                        Sign in
                                    </Button>
                            </Form>
                        
                            <section className="link--register">
                                <Link to="/register" className="link--register--name">Not a member yet?</Link>
                            </section>
                        
                        </section>

                    
                    </section>
                    </Col>
                    <Col sm={6}>
                     <section className="right-pic">
                     <h2 className="title--signIn" >Roundhouse</h2>
                     <img className="pic--signIn" src='\img\SSmallLogoBaltimore_and_Ohio_Railroad,_Martinsburg_West_Roundhouse,_East_End_of_Race_and_Martin_Streets,_Martinsburg,_Berkeley_County,_WV_HAER_WVA,2-MART,1A-_(sheet_2_of_5).png'  alt="Baltimore_and_Ohio_Railroad_Martinsburg_Roundhouse" />
                   
                    </section>
                    </Col>
                </Row>
           </Container>
        </main>
    )
}

