import React from 'react';
import Navbar from '../nav/navbar';
import styles from './board.module.css';
const Board = ({menu,setMenu}) => {
    return(
        <div className={styles.container}>
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>
            <h1 className={styles.title}>게시판</h1>
        </div>
    )
}

export default Board;