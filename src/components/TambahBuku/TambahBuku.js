import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "../TambahBuku/Tambah.module.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { storage } from "../../firebase/firebase"
import { getDownloadURL, uploadBytes, ref } from "firebase/storage"
import LoadingSvg from '../../assets/LoadingSvg';
import { useNavigate } from "react-router-dom"
import useInsertBook from '../../hooks/useInsertBook';
import { uuidv4 } from "@firebase/util"

const TambahBuku = () => {
    const [state, setState] = useState({
        title: "",
        author: "",
        publisher: "",
        pages: "",
        edition: "",
        file: "",
        synopsis: "",
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const image = useRef(null)

    const navigate = useNavigate();

    const { insertNewBook, insertBookLoading, insertBookError } = useInsertBook()

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (image === null) alert("anda belum memasukan gambar")
        // console.log(nama_ketua.current?.value.length < 1 ? "kosong" : nama_ketua.current?.value)

        if (state.title === "" ||
            state.author === "" ||
            state.publisher === "" ||
            state.pages === "" ||
            state.edition === "" ||
            image === null ||
            state.synopsis === "") {
            handleShow()
        }

        const metadata = {
            contentType: image?.current?.files[0].type,
            firebaseStorageDownloadTokens: uuidv4() //In this line you are adding the access token
        };

        const inputImage = image.current?.files[0]
        const fileName = image.current?.files[0].name
        const imageRef = ref(storage, fileName)
        // console.log(inputImage)

        await uploadBytes(imageRef, inputImage, metadata).then(() => {
            getDownloadURL(imageRef).then((url) => {
                insertNewBook({
                    variables: {
                        judul_buku: state.title,
                        pengarang: state.author,
                        penerbit: state.publisher,
                        tebal_buku: state.pages,
                        cetakan: state.edition,
                        sampul_buku: url,
                        sinopsis: state.synopsis,
                    }
                })
                navigate("/")

            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
        setState({
            title: "",
            author: "",
            publisher: "",
            pages: "",
            edition: "",
            file: "",
            synopsis: "",
        })
    }

    if (insertBookLoading) {
        return <LoadingSvg />
    }

    if (insertBookError) {
        console.log(insertBookError)
        return null
    }



    return (
        <Container fluid className={styles.background}>
            <Row >
                <Col lg={12} sm={12}>
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
                                    onChange={onChange}
                                    name="title"
                                    size="lg"
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    // required
                                    placeholder="Title" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Author"
                            >
                                <Form.Control
                                    onChange={onChange}
                                    name="author"
                                    size="lg"
                                    // required
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
                                    onChange={onChange}
                                    name="publisher"
                                    size="lg"
                                    // required
                                    style={{ padding: "0em 1em" }}
                                    type="text"
                                    placeholder="Publisher" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Pages"
                            >
                                <Form.Control
                                    onChange={onChange}
                                    name="pages"
                                    size="lg"
                                    // required
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
                                    onChange={onChange}
                                    name="edition"
                                    size="lg"
                                    // required
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
                                ref={image}
                                // required
                                placeholder="File" />
                        </Form.Group>
                        <Form.Group className={styles.blokbukuempat}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Synopsis"
                            >
                                <Form.Control
                                    onChange={onChange}
                                    name="synopsis"
                                    // required
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