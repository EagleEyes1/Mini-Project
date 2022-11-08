import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../ContentListBuku/Content.module.css"
import ListItemBuku from '../ListItemBuku/ListItemBuku';
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import GetAllBooks from '../../graphqls/GetAllBooks';
import LoadingSvg from '../../assets/LoadingSvg';

const PAGE_SIZE = 8;

const ContentListBuku = () => {
    const [page, setPage] = useState(0)

    const totalPage = page + 1

    const userData = useSelector((state) => state.user.userData)

    const { data: booksData, loading: booksLoading, error: booksError } = useQuery(GetAllBooks, {
        variables: {
            limit: PAGE_SIZE,
            offset: page * PAGE_SIZE,
            id_user: userData.user[0].id_user,
        }
    })
    console.log(booksData)

    // console.log(userData)



    if (booksLoading) {
        return <LoadingSvg />
    }

    if (booksError) {
        console.log(booksError)
        return <h1>Error</h1>
    }
    return (
        <Container fluid className={styles.content}>
            <Row>
                {booksData?.buku.map((item) => (
                    <Col id="myCol" lg={3} sm={6} >
                        <ListItemBuku key={item.id_buku} data={item} />
                    </Col>
                ))}
            </Row>
            <Row style={{ paddingTop: "2%" }}>
                <Col xs={6}>
                    <div>
                        <p style={{ padding: "2% 0% 0% 9%" }}>Halaman {page + 1} dari {totalPage}</p>
                    </div>
                </Col>
                <Col xs={6} >
                    <div className={styles.allicon}>
                        <div disabled={!page} onClick={() => setPage((prev) => prev - 1)} className={styles.previousicon}>
                            <img src={require("../../assets/previous.png")} alt="box" style={{ width: "100%", height: "auto", borderRadius: "20px" }} />
                        </div>
                        <div onClick={() => setPage((prev) => prev + 1)} className={styles.nexticon}>
                            <img src={require("../../assets/next.png")} alt="box" style={{ width: "100%", height: "auto", borderRadius: "20px" }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentListBuku