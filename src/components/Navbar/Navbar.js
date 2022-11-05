import React from 'react'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, redirect, Link, useParams } from "react-router-dom"
import styles from "../Navbar/Navbar.module.css"
import ContentListBuku from '../ContentListBuku/ContentListBuku';
import useGetAllBooks from '../../hooks/useGetAllBooks';
import useSearchBooks from '../../hooks/useSearchBooks';
import Table from 'react-bootstrap/Table';


const Navbar = (props) => {
    const [kondisi, setKondisi] = useState(false)

    const [kondisiSearch, setKondisiSearch] = useState(false)

    const { searchBook, searchData, searchLoading, searchError } = useSearchBooks()

    // const { id } = useParams()

    console.log(searchData)

    // console.log(searchData.buku[0].id_buku)

    const [searchValue, setSearchValue] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setKondisiSearch(true)
        searchBook({
            variables: {
                judul_buku: `%${searchValue}%`
            }
        })
    }

    const handleChange = (e) => {
        setSearchValue(
            e.target.value
        )

    }

    const navigate = useNavigate();
    const toHome = () => {
        navigate("/")
    }

    const toTambah = () => {
        navigate("/tambahbuku")
    }

    const toFavorites = () => {
        navigate("/favorites")
    }

    const handleBukaAccount = () => {
        setKondisi(true)
    }
    const handleTutupAccount = () => {
        setKondisi(false)
    }

    const handleBukaSearch = () => {
        setKondisiSearch(true)
    }
    const handleTutupSearch = () => {
        setKondisiSearch(false)
    }
    let viewMode = {};
    let searchMode = {};

    return (
        <>
            <Container fluid className={styles.navbar}>
                <Row className={styles.baris}>
                    <Col xs={1} className='ps-4'>
                        <div onClick={toHome} className={styles.back1}>
                            <img src={require("../../assets/home.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                        </div>
                    </Col>
                    <Col xs={1}>
                        <div onClick={toFavorites} className={styles.back2}>
                            <img src={require("../../assets/heart.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                        </div>
                    </Col>
                    <Col xs={8} className={styles.kolomsearch}>
                        <div className={styles.back3}>
                            <div onClick={handleSearch} style={searchMode}>
                                <img src={require("../../assets/search.png")} alt="box" style={{ width: "30px", height: "auto" }} />
                            </div>
                            <div className={styles.inputsearch} >
                                <input
                                    name="searchValue"
                                    value={searchValue}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder="Search All Book Here...." />
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div onMouseEnter={handleBukaAccount} onMouseLeave={handleTutupAccount} style={viewMode}>
                            <div className={styles.back4}>
                                <img src={require("../../assets/account.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <div className={`${styles.detail} ${!kondisi ? styles.hidden : ''}`} onMouseLeave={handleTutupAccount} onMouseEnter={handleBukaAccount}>
                            {/* <div onClick={handleTutupAccount} style={openMode} className={styles.back4}>
                                <img src={require("../../assets/account.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                            </div> */}
                            <div className={styles.accdetail}>
                                <div onClick={toTambah} className={styles.tambahbuku}>
                                    <div className={styles.iconbuku}>
                                        <img src={require("../../assets/book.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                                    </div>
                                    <div style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "10px" }}>
                                        TAMBAHKAN BUKU
                                    </div>
                                </div>
                                <div style={{ width: "80%", margin: "auto" }}>
                                    <hr style={{ border: "2px solid white" }} />
                                </div>
                                <div className={styles.tambahbuku}>
                                    <div className={styles.iconbuku}>
                                        <img src={require("../../assets/logout.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                                    </div>
                                    <div style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "10px" }}>
                                        LOGOUT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{
                    justifyContent: "center",
                    borderRadius: "10px",
                }}>
                    <Col xs={8} style={{
                        borderRadius: "10px",
                    }}>
                        <div className={`${styles.detail} ${!kondisiSearch ? styles.hidden : ''}`} onMouseEnter={handleBukaSearch}>
                            <Table className={styles.table} onMouseLeave={handleTutupSearch}>
                                <tbody style={{
                                    padding: "7%",
                                    alignItems: "center",
                                    borderRadius: "10px",
                                }}>
                                    {searchData?.buku.map((item, index) => {
                                        return <tr
                                            style={{
                                                padding: "7%",
                                                backgroundColor: "#00A9B7",
                                                borderRadius: "10px",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#ffffff",

                                            }}>
                                            <td style={{
                                                fontSize: "larger",
                                                textAlign: "center",
                                                fontWeight: "bolder"
                                            }}>
                                                {index + 1}
                                            </td>
                                            <td style={{
                                                width: "70px"
                                            }}>
                                                <img src={item.sampul_buku} alt="box" style={{ width: "100%", height: "auto" }} />
                                            </td>
                                            <td style={{
                                                fontSize: "larger",

                                                fontWeight: "bolder"
                                            }}>
                                                {item.judul_buku}
                                            </td>
                                        </tr>

                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navbar