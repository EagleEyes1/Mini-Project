import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"
import useInsertFavorite from '../../hooks/useInsertFavorite'
import { useSelector } from "react-redux";
import styles from "../ListItemBuku/List.module.css"
import useSubsAllFavorites from '../../hooks/useSubsAllFavorites';

const ListItemBuku = (props) => {
    const { id_buku, sampul_buku, judul_buku } = props.data

    // console.log(props.data)

    const userData = useSelector((state) => state.user.userData)

    // const [kondisi, setKondisi] = useState(false)

    // const { isFavorit } = props.data.idbukufavorits

    // console.log(props.data.idbukufavorits[0]?.isFavorit)

    const { favoriteData, favoriteLoading, favoriteError } = useSubsAllFavorites()

    const { insertNewFavorite, insertFavoriteLoading, insertFavoriteError } = useInsertFavorite()

    const handleFavorit = (e) => {
        e.preventDefault()
        if (id_buku && userData) {
            insertNewFavorite({
                variables: {
                    id_buku_favorit: id_buku,
                    id_user: userData.user[0].id_user,
                }
            })

            // const newData = {
            //     id_buku_favorite: id_buku,
            //     id_user: userData,
            // }
            // addFavorite(newData)
            // console.log(newData)
            // setState({
            //     id_buku_favorite: "",
            //     id_user: ""
            // })
            // setKondisi(true)
            alert("Buku Favorit Berhasil Ditambahkan")
        } else {
            alert("Buku Favorit Gagal Ditambahkan")
        }
    }

    // 

    return (
        <div className={styles.sampulsatu}>
            <div className={styles.hoversampul}>
                <div className={`${props.data.idbukufavorits[0]?.isFavorit ? styles.iconclick : styles.iconfavorit}`} onClick={handleFavorit}>
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