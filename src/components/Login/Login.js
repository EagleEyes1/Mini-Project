import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import useGetUser from '../../hooks/useGetUser';
import styles from "../Login/Login.module.css"
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/userSlice"
import { useNavigate } from "react-router-dom"
import { Auth } from '../../utils/Auth';

const Login = () => {
    const [show, setShow] = useState(false);

    const { validateUser, userLoading, userError } = useGetUser()

    const dispatch = useDispatch()

    const userData = useSelector((state) => state.user.userData)

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        await validateUser({
            variables: {
                email: state.email,
                password: state.password
            }
        })
            .then((query) => {
                console.log(query.data.user)
                if (query.data.user.length !== 0) {
                    dispatch(signIn(query.data))
                    Auth.storeUserInfoToCookie(query.data)
                    navigate("/")
                } else {
                    handleShow()
                }
            })
    }

    useEffect(() => {
        console.log(userData)
    }, [userData])

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
                                controlId="Email"
                                label="Email"
                            >
                                <Form.Control
                                    value={state.email}
                                    onChange={onChange}
                                    name="email"
                                    size="lg"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group style={{
                            marginBottom: "1%"
                        }}>
                            <FloatingLabel
                                controlId="Password"
                                label="Password"
                            >
                                <Form.Control
                                    value={state.password}
                                    onChange={onChange}
                                    name="password"
                                    size="lg"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Button style={{
                            marginBottom: "1%"
                        }} onClick={handleSubmit} variant="light">Login</Button>
                    </Form>
                </Col>
            </Row>
            <Modal
                show={show}
                size="sm"
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Peringatan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Email Atau Password Salah</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Login