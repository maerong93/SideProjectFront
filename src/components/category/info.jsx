import React from 'react';
import { useEffect } from 'react';
import Navbar from '../nav/navbar';
import { useHistory } from 'react-router-dom';
import styles from './info.module.css';
const Info = ({authService,menu,setMenu,user}) => {
    const history = useHistory();
    const save = () => {

    }
    const logOut = () => {
        // alert("로그아웃");
        // authService.logout();
        window.localStorage.setItem("login",false);
        document.location.href="/"
    }

    console.log(window.localStorage.getItem("login"));
    // useEffect(()=>{
    //    authService.onAuthChange(user => {
    //        if(!user){
    //         history.push('/');
    //        }
    //    })
    // })
    
    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>
            
            <h1 className={styles.title}>내 정보</h1>
            <div className={styles.content}>          
                <div className={styles.info}>
                    <div className={styles.info1}>
                        <label>사진</label>
                        <input type="text" />
                    </div>
                    <div className={styles.info1}>
                        <label>이메일</label>
                        <input type="text" />
                    </div>
                    <div className={styles.info1}>
                        <label>이름</label>
                        <input type="text" />
                    </div>
                    <div className={styles.info1}>
                        <label>소개</label>
                        <textarea className={styles.text} />
                    </div>
                </div>
                <button className={styles.save} onClick={save}>저장하기</button>
                <button className={styles.logout} onClick={logOut}>로그아웃</button>
            </div>
            <div className={styles.line}></div>

            <div className={styles.payment}>
                <h2>결제내역</h2>
                <p>{user.userId}님의 결제 내역은 .... 입니다.</p>
            </div>
        </div>
        
    );

}
export default Info;