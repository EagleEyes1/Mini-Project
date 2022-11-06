import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import styles from "../Footer/Footer.module.css"

const Footer = () => {
    return (
        <>
            <Container fluid style={{ marginTop: "5%" }}>
                <Row style={{ backgroundColor: "#00A9B7", textAlign: "center", alignItems: "center", justifyContent: "center", borderRadius: "20px 20px 0px 0px" }}>
                    <Col lg={12} sm={12} style={{ width: "12vw" }}>
                        <div>
                            <Image src={require("../../assets/Eagle'sLibrary.png")} alt="box" fluid style={{ alignItems: "center", textAlign: "center" }} />
                        </div>
                    </Col>
                </Row>
            </Container >
            <Container fluid>
                <Row style={{ backgroundColor: "#0094A0", padding: "1% 0% 1% 3%" }}>
                    <Col lg={6} sm={6}>
                        <div style={{ color: "#ffffff", padding: "1% 9% 0% 7%", textAlign: "right" }}>
                            About Us
                        </div>
                    </Col>
                    <Col lg={6} sm={6} className={styles.blokicon}>
                        <div className={styles.bloktwitter}>
                            <a href="https://twitter.com/fahd_erlangga" target="_blank" rel="noreferrer"><Image src={require("../../assets/twitter.png")} alt="box" fluid /></a>
                        </div>
                        <div className={styles.blokinstagram} >
                            <a href="https://www.instagram.com/fahd_erlangga/" target="_blank" rel="noreferrer"><Image src={require("../../assets/instagram.png")} alt="box" fluid /></a>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Footer