import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rate } from 'antd';
import styles from "../ListItemReview/ListReview.module.css"
import useUpdateReview from '../../hooks/useUpdateReview';
import useDeleteReview from '../../hooks/useDeleteReview';
import LoadingDetailSvg from '../../assets/LoadingDetailSvg'

const ListItemReview = (props) => {
    const { id_review, nama_reviewer, hasil_review, rating } = props.data

    const [state, setState] = useState({
        id_review: id_review,
        hasil_review: hasil_review,
        rating: rating,
    })

    const [editShow, setEditShow] = useState(false);

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

    const { updateOldReview, updateLoading, updateError } = useUpdateReview()

    const { deleteLoading, deleteReview } = useDeleteReview()

    const deleteOldReview = (idx) => {
        deleteReview({
            variables: {
                id_review: idx,
            }
        })
    }

    const onChangeReview = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleChange = (value) => {
        console.log(value)
        setState({
            ...state,
            rating: value
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
        setEditShow(false)
    }

    if (updateLoading || deleteLoading) {
        return <LoadingDetailSvg />
    }

    if (updateError) {
        console.log(updateError)
        return null
    }

    return (
        <>
            <Row style={{ padding: "2%" }}>
                <Col lg={12} sm={12}>
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
                            <div onClick={() => deleteOldReview(id_review)} className={styles.icondelete}>
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
                            name='rating'
                            onChange={handleChange}
                            allowHalf
                            defaultValue={state.rating}
                            style={{ paddingBottom: "20px", paddingLeft: "25px" }} />
                    </div>
                    <Form.Control
                        style={{ padding: "2em 0em 0em 1em", color: "#ffffff", backgroundColor: "#32B9C4", height: "120px" }}
                        as="textarea"
                        onChange={onChangeReview}
                        name='hasil_review'
                        value={state.hasil_review}
                        placeholder={state.hasil_review} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateReview} variant="info">Submit</Button>
                    <Button onClick={handleEditClose}>Tutup</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListItemReview


