import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import styles from "../ListItemReview/ListReview.module.css"
import { useParams } from 'react-router-dom';
import useUpdateReview from '../../hooks/useUpdateReview';

const ListItemReview = (props) => {
    const [state, setState] = useState({
        id_review: "",
        hasil_review: "",
        rating: ""
    })

    const { nama_reviewer, hasil_review, rating } = props.data

    const [editShow, setEditShow] = useState(false);

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);


    const { updateOldReview, updateLoading, updateError } = useUpdateReview()


    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const updateReview = () => {
        updateOldReview({
            variables: {
                id_review: state.id_review,
                hasil_review: state.hasil_review,
                rating: state.rating,
            }
        })
    }

    // const handleSubmit = (e) => {
    //     if (state.hasil_review && state.rating) {
    //         const newData = {
    //             hasil_review: state.hasil_review,
    //             rating: state.rating,
    //         }
    //         addReview(newData)
    //         setState({
    //             hasil_review: "",
    //             rating: ""
    //         })
    //     } else {
    //         alert("Review Belum Diisi")
    //     }
    // }

    return (
        <>
            <Row style={{ padding: "2%" }}>
                <Col xs={12}>
                    <div className={styles.hasilreview}>
                        <div className={styles.reviewicon}>
                            <div onClick={handleEditShow} className={styles.iconedit}>
                                <img src={require("../../assets/edit.png")}
                                    alt="box"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }} />
                            </div>
                            <div className={styles.icondelete}>
                                <img src={require("../../assets/delete.png")}
                                    alt="box"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }} />
                            </div>
                        </div>
                        <div style={{ display: "flex", paddingLeft: "2em" }}>
                            <img src={require("../../assets/account.png")}
                                alt="box"
                                style={{
                                    width: "4%",
                                    height: "auto",
                                }} />
                            <div style={{ padding: "5px 0px 0px 12px" }}>{nama_reviewer}</div>
                        </div>
                        <div>
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={rating}
                                style={{ paddingLeft: "2em", paddingTop: "5px" }}
                            />
                        </div>
                        <div style={{ padding: "1em 0em 3em 0em" }}>
                            {hasil_review}
                        </div>
                    </div>
                </Col>
            </Row>
            <Modal
                className={styles.edit}
                show={editShow}
                backdrop="static"
                size="lg"
                onHide={handleEditClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Your Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Rating
                        <Rate
                            className={styles.star}
                            name='hasilrating'
                            allowHalf
                            defaultValue={rating}
                            style={{ paddingBottom: "20px", paddingLeft: "25px" }} />
                    </div>
                    <Form.Control
                        style={{ color: "#ffffff", backgroundColor: "#32B9C4", height: "120px" }}
                        as="textarea"
                        name="hasil_review"
                        value={state.hasil_review}
                        placeholder="Write Your Review Here" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateReview} variant="primary">Submit</Button>
                    <Button onClick={handleEditClose}>Tutup</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListItemReview


