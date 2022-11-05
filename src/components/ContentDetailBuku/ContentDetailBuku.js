import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../ContentDetailBuku/Detail.module.css"
import useGetAllReviewsByBookId from "../../hooks/useGetAllReviewsByBookId"
import { useParams } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LoadingSvg from '../../assets/LoadingSvg';
import useGetBookById from '../../hooks/useGetBookById';
import ListItemReview from '../ListItemReview/ListItemReview';
import useInsertReview from '../../hooks/useInsertReview';

const ContentDetailBuku = () => {
    const { id } = useParams()

    const [state, setState] = useState({
        buku_id: id,
        hasil_review: "",
        rating: ""
    })

    const [countDownload, setCountDownload] = useState(0)

    const { reviewsData, reviewsLoading, reviewsError } = useGetAllReviewsByBookId(id)

    const { bookData, bookLoading, bookError } = useGetBookById(id)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { insertNewReview, insertLoading, insertError } = useInsertReview()

    const addReview = (newReview) => {
        const newData = {
            ...newReview
        }
        insertNewReview({
            variables: {
                buku_id: id,
                hasil_review: newData.hasil_review,
                rating: newData.rating
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
        e.preventDefault()
        if (state.hasil_review && state.rating) {
            const newData = {
                hasil_review: state.hasil_review,
                rating: state.rating,
            }
            addReview(newData)
            setState({
                hasil_review: "",
                rating: ""
            })
        } else {
            alert("Review Ada Yang Masih Belum Diisi")
        }
    }

    console.log(state)
    if (reviewsLoading || bookLoading || insertLoading) {
        return <LoadingSvg />
    }

    if (reviewsError || bookError || insertError) {
        console.log(reviewsError || bookError)
        return null
    }

    return (
        <Container fluid>
            <Row style={{ padding: "3%" }}>
                <Col xs={5}>
                    <div className={styles.bloksampul}>
                        <div className={styles.bloktitle}>
                            <h2>
                                {bookData?.buku_by_pk.judul_buku}
                            </h2>
                        </div>
                        <div className={styles.blokgambar}>
                            <img src={bookData?.buku_by_pk.sampul_buku}
                                alt="box"
                                style={{
                                    width: "85%",
                                    height: "auto"
                                }} />
                        </div>
                    </div>
                </Col>
                <Col xs={5}>
                    <div className={styles.blokdetailbuku}>
                        <div className={styles.bloksinopsis}>
                            <h4>
                                Synopsis
                            </h4>
                        </div>
                        <div className={styles.bloktulissinopsis}>
                            {bookData?.buku_by_pk.sinopsis}
                        </div>
                        <div className={styles.blokrating}>
                            <div className={styles.rating}>
                                Rating
                            </div>
                            <div className={styles.blokbintang}>
                                <Rate
                                    className={styles.startotal}
                                    disabled
                                    defaultValue={4} />
                            </div>
                        </div>
                        <div className={styles.download}>
                            <div onClick={() => setCountDownload(countDownload + 1)} className={styles.blokdownload}>
                                Download
                            </div>
                            <div className={styles.blokdownloaded}>
                                {countDownload} Downloaded
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ padding: "2%" }}>
                <Col xs={6}>
                    <div className={styles.userreview}>
                        User Reviews
                    </div>
                </Col>
                <Col xs={6}>
                    <div onClick={handleShow} className={styles.plusreview}>
                        + Review
                    </div>
                </Col>
            </Row>
            {reviewsData?.review.map((item) => (
                <ListItemReview key={item.id_review} data={item} />
            ))}
            <Modal
                show={show}
                backdrop="static"
                size="lg"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Rating
                        <Rate
                            className={styles.star}
                            name='rating'
                            allowHalf
                            defaultValue={0}
                            style={{ paddingBottom: "20px", paddingLeft: "25px" }} />
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Write Your Review Here"
                        style={{ color: "#ffffff" }}
                    >
                        <Form.Control
                            style={{ padding: "2em 0em 0em 1em", color: "#ffffff", backgroundColor: "#32B9C4", height: "120px" }}
                            as="textarea"
                            onChange={onChange}
                            name='hasil_review'
                            value={state.hasil_review}
                            placeholder="Write Your Review Here" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleSubmit}>Submit</Button>
                    <Button variant="danger" onClick={handleClose}>Tutup</Button>
                </Modal.Footer>
            </Modal>
        </Container >
    )
}

export default ContentDetailBuku