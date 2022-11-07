import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useDeleteFavorite from '../../hooks/useDeleteFavorite';
import styles from '../FavoritListRow/ListFavorit.module.css'

const FavoritListRow = (props) => {
    const { judul_buku, sampul_buku, total_rating } = props.data.bukufavorit

    const { id_favorit } = props.data

    console.log(props.data.bukufavorit)

    const { deleteFavoriteLoading, deleteFavorite } = useDeleteFavorite()

    const deleteOldFavorite = (idx) => {
        deleteFavorite({
            variables: {
                id_favorit: idx,
            }
        })
    }

    return (
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
                <div onClick={() => deleteOldFavorite(id_favorit)}>
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
    )
}

export default FavoritListRow