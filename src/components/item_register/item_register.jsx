import React from 'react';
import styles from './item_register.module.css';
const ItemRegister = ({itemReg,SetItemReg}) => {

    const close = () => {
        SetItemReg(false);
    }

    return (
        <div className={styles.bg}>
            <div className={styles.bg1}>
                <h1 className={styles.title}>상품등록</h1>
                <table border="1"className={styles.regTb}>
                    <tr>
                        <td>상품명</td><td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>가격</td><td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>이미지</td><td><input type="file"/></td>
                    </tr>                    
                </table>
                <span className={styles.clsBtn} onClick={close}>닫기</span>
                <button className={styles.regBtn}>상품등록</button>
            </div>
        </div>
    )
            
};

export default ItemRegister; 