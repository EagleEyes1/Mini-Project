import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../ContentListBuku/Content.module.css"
import ListItemBuku from '../ListItemBuku/ListItemBuku';

const ContentListBuku = (props) => {
    return (
        <Container fluid className={styles.content}>
            <Row>
                {props.data?.map((item) => (
                    <Col id="myCol" lg={3} sm={6} >
                        <ListItemBuku key={item.id_buku} data={item} />
                    </Col>
                ))}
            </Row>
            <Row style={{ paddingTop: "2%" }}>
                <Col xs={6}>
                    <div>
                        <p style={{ padding: "2% 0% 0% 9%" }}>Page 1 of 259</p>
                    </div>
                </Col>
                <Col xs={6} >
                    <div className={styles.allicon}>
                        <div className={styles.previousicon}>
                            <img src={require("../../assets/previous.png")} alt="box" style={{ width: "100%", height: "auto", borderRadius: "20px" }} />
                        </div>
                        <div className={styles.nexticon}>
                            <img src={require("../../assets/next.png")} alt="box" style={{ width: "100%", height: "auto", borderRadius: "20px" }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentListBuku