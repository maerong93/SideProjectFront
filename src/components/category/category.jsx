import React from 'react';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import Navbar from '../nav/navbar';
import styles from './category.module.css';

const Category = ({authService,menu,setMenu,cookies}) => {
    const history = useHistory();

    // const infoBtn = () => {
    //     document.location.href="/info";
    // }
    // const itemBtn = () => {
    //     document.location.href="/item";
    // }
    // const cartBtn = () => {
    //     document.location.href="/cart";
    // } 
    // const boardBtn = () => {
    //     document.location.href="/board";
    // }

    const logout = () => {
        //authService.logout();
       //cookies.get
    }
    // useEffect(()=> {
    //     authService.onAuthChange(user => {
    //       if(!user){
    //         history.push('/');
    //       }
    //     });
    //   })

    return (
        <div className={styles.container}>
            <img className={styles.img1} src="img/sexy.jpg" alt="" />
            {/* <div className={styles.info} onClick={infoBtn}>내 정보</div>
            <div className={styles.item} onClick={itemBtn}>상품 정보</div>
            <div className={styles.cart} onClick={cartBtn}>장바구니</div>
            <div className={styles.board} onClick={boardBtn}>게시판</div> */}
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>

            <button className={styles.logoutBtn} 
            //onClick={logout}
            >로그아웃</button>
        </div>
    );
}
export default Category;