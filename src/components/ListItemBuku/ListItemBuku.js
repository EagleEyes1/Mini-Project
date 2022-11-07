import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"
import useInsertFavorite from '../../hooks/useInsertFavorite'
import { useSelector } from "react-redux";
import styles from "../ListItemBuku/List.module.css"

const ListItemBuku = (props) => {
    const { id_buku, sampul_buku, judul_buku } = props.data

    const [state, setState] = useState({
        id_buku_favorite: "",
        id_user: "",
    })

    const userData = useSelector((state) => state.user.userData)

    const [kondisi, setKondisi] = useState(false)

    const { insertNewFavorite, insertFavoriteLoading, insertFavoriteError } = useInsertFavorite()

    const addFavorite = (newFavorite) => {
        const newData = {
            ...newFavorite
        }
        insertNewFavorite({
            variables: {
                id_buku_favorite: newData.id_buku,
                id_user: userData.user[0].id_user
            }
        })
    }

    const handleFavorit = (e) => {
        e.preventDefault()
        setKondisi(true)
        if (state.id_buku_favorite && state.id_user) {
            const newData = {
                id_buku_favorite: state.id_buku_favorite,
                id_user: state.id_user,
            }
            addFavorite(newData)
            setState({
                id_buku_favorite: "",
                id_user: ""
            })
            alert("Buku Favorit Berhasil Ditambahkan")
        } else {
            alert("Buku Favorit Gagal Ditambahkan")
        }
    }

    return (
        <div className={styles.sampulsatu}>
            <div className={styles.hoversampul}>
                <div className={`${!kondisi ? styles.iconfavorit : styles.iconclick}`} onClick={handleFavorit}>
                    <Image src={require("../../assets/bookmark.png")} alt="box" fluid />
                </div>
                <Link to={`/detailbuku/${id_buku}`}>
                    <Image src={sampul_buku} alt="box" className={styles.sampulbuku} fluid />
                </Link>
            </div>
            <div>
                <h5 style={{ paddingTop: "20px" }}>{judul_buku}</h5>
            </div>
            <div>
                <Link to={`/detailbuku/${id_buku}`}>
                    <p
                        style={{
                            color: "#32B9C4",
                            fontSize: "15px",
                            float: "right",
                            paddingTop: "20px"
                        }}
                    >
                        More...
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ListItemBuku