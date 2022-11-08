import React from 'react'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from "react-router-dom"
import styles from "../Navbar/Navbar.module.css"
import useSearchBooks from '../../hooks/useSearchBooks';
import LoadingDetailSvg from '../../assets/LoadingDetailSvg';
import Image from 'react-bootstrap/Image'
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice"
import { Auth } from '../../utils/Auth';

const Navbar = (props) => {
    const [kondisi, setKondisi] = useState(false)

    const [kondisiSearch, setKondisiSearch] = useState(false)

    const { searchBook, searchData, searchLoading, searchError } = useSearchBooks()

    const dispatch = useDispatch()

    const userData = useSelector((state) => state.user.userData)

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

    const signOut = () => {
        dispatch(logOut)
        Auth.signOut()
        navigate("/login")
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

    if (searchError) {
        console.log(searchError)
        return null
    }

    return (
        <>
            <Container fluid className={styles.navbar}>
                <Row className={styles.baris}>
                    <Col lg={1} sm={2} className='ps-4'>
                        <div onClick={toHome} className={styles.back1}>
                            <img src={require("../../assets/home.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                        </div>
                    </Col>
                    <Col lg={1} sm={2}>
                        <div onClick={toFavorites} className={styles.back2}>
                            <img src={require("../../assets/heart.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                        </div>
                    </Col>
                    <Col lg={8} sm={5} className={styles.kolomsearch}>
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
                    <Col lg={2} sm={3}>
                        <div onMouseEnter={handleBukaAccount} onMouseLeave={handleTutupAccount} style={viewMode}>
                            <div className={styles.back4}>
                                <img src={require("../../assets/account.png")} alt="box" style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{
                    justifyContent: "right"
                }}>
                    <Col lg={4} sm={1}>
                        <div className={`${styles.detail} ${!kondisi ? styles.hidden : ''}`} onMouseLeave={handleTutupAccount} onMouseEnter={handleBukaAccount}>
                            <div className={styles.accdetail}>
                                <div style={{
                                    color: "#ffffff",
                                    textAlign: "center",
                                    backgroundColor: "#018792",
                                    marginBottom: "10px"
                                }}>
                                    Log-In sebagai {userData.user[0].display_name}
                                </div>
                                <div onClick={toTambah} className={styles.tambahbuku}>
                                    <div className={styles.iconbuku}>
                                        <Image src={require("../../assets/book.png")} alt="box" fluid />
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
                                    <div onClick={signOut} style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "10px" }}>
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
                            <ul className={styles.table} onMouseLeave={handleTutupSearch}>
                                {searchData?.buku.map((item, index) => {
                                    return <li style={{
                                        width: "100%"
                                    }}>
                                        <Link to={`/detailbuku/${item.id_buku}`} onClick={handleTutupSearch}>
                                            <div
                                                className={styles.hasilsearch}>
                                                <span>
                                                    {index + 1}
                                                </span>
                                                <span style={{
                                                    width: "70px",
                                                    textAlign: "center",
                                                    paddingLeft: "80px"
                                                }}>
                                                    <img src={item.sampul_buku} alt="box" style={{ width: "50px", height: "auto" }} />
                                                </span>
                                                <span style={{
                                                    fontSize: "larger",
                                                    textAlign: "center",
                                                    fontWeight: "bolder",
                                                    paddingLeft: "120px"
                                                }}>
                                                    {item.judul_buku}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Navbar