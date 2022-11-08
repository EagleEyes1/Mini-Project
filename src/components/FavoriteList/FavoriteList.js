import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../FavoriteList/Favorite.module.css"
import useSubsAllFavorites from '../../hooks/useSubsAllFavorites';
import useDeleteFavorite from '../../hooks/useDeleteFavorite';
import { useSelector } from "react-redux";
import FavoritListRow from '../FavoritListRow/FavoritListRow';
import LoadingSvg from '../../assets/LoadingSvg';

const FavoriteList = () => {
    const userData = useSelector((state) => state.user.userData)

    const { favoriteData, favoriteLoading, favoriteError } = useSubsAllFavorites(userData.user[0].id_user)

    const { deleteFavoriteLoading, deleteFavorite } = useDeleteFavorite()

    const deleteOldFavorite = (idx) => {
        deleteFavorite({
            variables: {
                id_favorit: idx,
            }
        })
    }

    console.log(favoriteData)

    if (favoriteLoading) {
        return <LoadingSvg />
    }

    if (favoriteError) {
        console.log(favoriteError)
        return null
    }

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
            {favoriteData?.favorit.map((item) => (
                <FavoritListRow key={item.id_favorit} data={item} />
            ))}
        </Container>
    )
}

export default FavoriteList