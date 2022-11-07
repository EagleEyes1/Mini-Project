import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../FavoriteList/Favorite.module.css"
import useSubsAllFavorites from '../../hooks/useSubsAllFavorites';
import useDeleteFavorite from '../../hooks/useDeleteFavorite';

const FavoriteList = () => {
    const { favoriteData, favoriteLoading, favoriteError } = useSubsAllFavorites()

    const { deleteFavoriteLoading, deleteFavorite } = useDeleteFavorite()

    const deleteOldFavorite = (idx) => {
        deleteFavorite({
            variables: {
                id_favorit: idx,
            }
        })
    }

    console.log(favoriteData)

    return (
        <Container fluid>
            <Row style={{ padding: "3% 3% 0% 8%" }}>
                <Col xs={12}>
                    <div style={{
                        marginBottom: "30px",
                        fontWeight: "bolder",
                        fontSize: "larger"
                    }}>
                        Favorites
                    </div>
                </Col>
            </Row>
            <Row style={{ marginBottom: "3%", padding: "0% 3% 0% 8%" }}>
                <Col xs={3}>
                    <div>
                        Cover
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        Title
                    </div>
                </Col>
                <Col xs={3}>
                    <div>
                        Rating
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
                        Action
                    </div>
                </Col>
            </Row>
            <Row className={styles.barisfavorit}>
                <Col xs={3}>
                    <div>
                        <img src={require("../../assets/sampul.jpg")} alt="box"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "20px"
                            }} />
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        Misteri Cinta Guru Honorer
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
                        <div style={{ marginLeft: "10px" }}>4/5</div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div onClick={() => { }}>
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
            <Row className={styles.barisfavorit}>
                <Col xs={3}>
                    <div>
                        <img src={require("../../assets/sampul.jpg")} alt="box"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "20px"
                            }} />
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        Misteri Cinta Guru Honorer
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
                        <div style={{ marginLeft: "10px" }}>4/5</div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
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
            <Row className={styles.barisfavorit}>
                <Col xs={3}>
                    <div>
                        <img src={require("../../assets/sampul.jpg")} alt="box"
                            style={{
                                width: "40%",
                                height: "auto",
                                borderRadius: "20px"
                            }} />
                    </div>
                </Col>
                <Col xs={4}>
                    <div>
                        Misteri Cinta Guru Honorer
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
                        <div style={{ marginLeft: "10px" }}>4/5</div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
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
        </Container>
    )
}

export default FavoriteList