import React from 'react';
import styles from './main.module.css';

const Main = ({itemName,itemId,img}) => {

    return(
        <div className={styles.container}>
            <img className={styles.img} src={img} alt='logo'></img>
            <h1>{itemName}</h1>
            <h2>{itemId}</h2>
        </div>
    );
    
};

export default Main;