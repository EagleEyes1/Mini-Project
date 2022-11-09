import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useDeleteFavorite from '../../hooks/useDeleteFavorite';
import styles from '../FavoritListRow/ListFavorit.module.css'
import LoadingDetailSvg from '../../assets/LoadingDetailSvg';

const FavoritListRow = (props) => {
    const { judul_buku, sampul_buku, total_rating } = props.data.bukufavorit

    console.log(props.data.bukufavorit)

    const { id_favorit } = props.data

    // console.log(props.data)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { deleteFavoriteLoading, deleteFavorite } = useDeleteFavorite()

    const deleteOldFavorite = (idx) => {
        deleteFavorite({
            variables: {
                id_favorit: idx,
            }
        })
        handleClose()
    }

    if (deleteFavoriteLoading) {
        return <LoadingDetailSvg />
    }

    return (
        <>
            <Row className={styles.barisfavorit}>
                <Col xs={3}>
                    <div>
                        <img src={sampul_buku} alt="box"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "20px"
                            }} />
                    </div>
                </Col>
                <Col xs={4}>
                    <div className={styles.judulbukufavorit}>
                        {judul_buku}
                    </div>
                </Col>
                <Col xs={3}>
                    <div style={{ display: "flex" }}>
                        <img src={require("../../assets/starfull.png")}
                            alt="box"
                            style={{
                                width: "15%",
                                height: "auto",
                                paddingRight: "10px"
                            }} />
                        <div style={{ marginLeft: "10px" }}>{total_rating}/5</div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div onClick={() => handleShow()}>
                        <img src={require("../../assets/deleteblack.png")}
                            alt="box"
                            style={{
                                width: "20%",
                                height: "auto",
                                marginLeft: "8px"
                            }} />
                    </div>
                </Col>
            </Row>
            <Modal
                show={show}
                backdrop="static"
                size="sm"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Peringatan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Yakin untuk menghapus buku favorit ini?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => deleteOldFavorite(id_favorit)} variant="danger">Submit</Button>
                    <Button onClick={handleClose}>Tutup</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FavoritListRow