import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "../Login/Login.module.css"

const Login = () => {
    const [show, setShow] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Row className={styles.barislogin}>
                <Col xs={5} className={styles.colsatu}>
                </Col>
                <Col xs={5} className={styles.formlogin}>
                    <div style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                        fontWeight: "bolder",
                        fontSize: "40px"
                    }}>
                        Welcome
                    </div>
                    <Form>
                        <Form.Group style={{
                            marginBottom: "1%"
                        }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                            >
                                <Form.Control
                                    name="email"
                                    size="lg"
                                    type="text"
                                    placeholder="Email" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group style={{
                            marginBottom: "1%"
                        }}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                            >
                                <Form.Control
                                    name="password"
                                    size="lg"
                                    type="password"
                                    placeholder="Password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button style={{
                            marginBottom: "1%"
                        }} variant="light">Login</Button>
                    </Form>
                </Col>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Peringatan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Data Inputan Masih Ada Yang Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Login