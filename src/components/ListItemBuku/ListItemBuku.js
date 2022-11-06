import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"
import styles from "../ListItemBuku/List.module.css"

const ListItemBuku = (props) => {
    const { id_buku, sampul_buku, judul_buku } = props.data
    const [kondisi, setKondisi] = useState(false)

    return (
        <div className={styles.sampulsatu}>
            <div className={styles.hoversampul}>
                <div className={`${!kondisi ? styles.iconfavorit : styles.iconclick}`} onClick={() => setKondisi(!kondisi)}>
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