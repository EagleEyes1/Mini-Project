import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "../TambahBuku/Tambah.module.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingSvg from '../../assets/LoadingSvg';
import useInsertBook from '../../hooks/useInsertBook';

const TambahBuku = () => {
    const [state, setState] = useState({
        title: "",
        author: "",
        publisher: "",
        pages: "",
        edition: "",
        file: null,
        synopsis: "",
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { insertNewBook, insertBookLoading, insertBookError } = useInsertBook()

    const addBook = (newBook) => {
        const newData = {
            ...newBook
        }
        insertNewBook({
            variables: {
                judul_buku: newData.title,
                pengarang: newData.author,
                penerbit: newData.publisher,
                tebal_buku: newData.pages,
                cetakan: newData.edition,
                sampul_buku: newData.file,
                sinopsis: newData.synopsis,
            }
        })
    }

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        if (state.title &&
            state.author &&
            state.publisher &&
            state.pages &&
            state.edition &&
            state.file &&
            state.synopsis) {
            const newData = {
                title: state.title,
                author: state.author,
                publisher: state.publisher,
                pages: state.pages,
                edition: state.edition,
                file: state.file,
                synopsis: state.synopsis
            }
            addBook(newData)
            setState({
                title: "",
                author: "",
                publisher: "",
                pages: "",
                edition: "",
                file: null,
                synopsis: "",
            })
        } else {
            handleShow()
        }
    }

    if (insertBookLoading) {
        return <LoadingSvg />
    }

    if (insertBookError) {
        console.log(insertBookError)
        return null
    }


    return (
        <Container fluid>
            <Row >
                <Col xs={12}>
                    <div>
                        <img src={require("../../assets/background.png")}
                            alt="box"
                            style={{
                                width: "35%",
                                maxHeight: "100vh",
                                marginTop: "-10vh",
                                right: "0vw",
                                float: "right",
                                paddingLeft: "1vw",
                                marginLeft: "1vw"
                            }} />
                    </div>
                    <Form className={styles.tambahbuku} >
                        <Form.Text style={{
                            paddingLeft: "20px",
                            fontWeight: "bolder",
                            fontSize: "larger",
                            color: "#32b9c4"
                        }}>
                            Tambah Buku
                        </Form.Text>
                        <Form.Group className={styles.blokbukusatu}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Title"
                            >
                                <Form.Control
                                    name="title"
                                    size="lg"
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    placeholder="Title" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Author"
                            >
                                <Form.Control
                                    name="author"
                                    size="lg"
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    placeholder="Author" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className={styles.blokbukudua}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Publisher"
                            >
                                <Form.Control
                                    name="publisher"
                                    size="lg"
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    placeholder="Publisher" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Pages"
                            >
                                <Form.Control
                                    name="pages"
                                    size="lg"
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    placeholder="Pages" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className={styles.blokbukutiga}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Edition"
                            >
                                <Form.Control
                                    name="edition"
                                    size="lg"
                                    style={{ padding: "0em 3em 0em 1em" }}
                                    type="text"
                                    placeholder="Edition" />
                            </FloatingLabel>
                            <Form.Control
                                name="file"
                                size="sm"
                                style={{
                                    height: "4em",
                                    width: "auto",
                                    paddingTop: "18px",
                                    paddingLeft: "30px",
                                    marginTop: "5px",
                                    marginLeft: "7px",
                                }}
                                type="file"
                                placeholder="File" />
                        </Form.Group>
                        <Form.Group className={styles.blokbukuempat}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Synopsis"
                            >
                                <Form.Control
                                    name="synopsis"
                                    style={{ padding: "2em 0em 0em 1em", height: "120px" }}
                                    as="textarea"
                                    placeholder="Synopsis" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button
                            onClick={handleSubmit}
                            type='submit'
                            style={{ margin: "2% 0% 0% 2%" }}
                            variant="outline-info">Submit</Button>{' '}
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
        </Container >
    )
}

export default TambahBuku