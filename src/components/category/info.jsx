import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../nav/navbar';
import { useHistory } from 'react-router-dom';
import styles from './info.module.css';
import axios from 'axios';
const Info = ({authService,menu,setMenu,user}) => {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState([]);
    const save = () => {

    }
    const logOut = () => {

        window.localStorage.removeItem("auth");
        document.location.href="/";
    }
    // const sendId = (e) => {
    //     
    //     e.preventDefault();
    //     console.log(mb_id)
    //     fetch("http://127.0.0.1:3000/api/user/info",{
    //         method:"post",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             mb_id: mb_id
    //         })
                
    //     })
    //     .then(res=>res.json())
    //     .catch(err=>console.log(err));
    // }
    
    useEffect(() => {
        const loginId = window.localStorage.getItem("loginId");
        fetch("http://localhost:3000/api/user/info",{
            method: 'POST',
            headers:{
                'Accept':  'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'include',
        })
        .then(function(response) {
            
            return response.json();
        })
        .then(function(myJson) {
            setUserInfo(myJson[0]);
            //console.log(myJson);
            
        });


        // fetch("http://127.0.0.1:3000/api/user/info",{
        //     method:"post",
        //     withCredentials: true,
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
          
        // })
        // .then(res=>res.json())
        // .then(res=> console.log(res))
        // .catch(err=>console.log(err));

    },[])
    
    console.log(userInfo);
    return (
        <div className={styles.container}>
            
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>
            
            <h1 className={styles.title}>내 정보</h1>
            <div className={styles.content}>          
                <div className={styles.info}>
                    <div className={styles.info1}>
                        <label>아이디</label>
                        <span>{
                                userInfo.mb_id
                            }
                        </span>
                    </div>
                    <div className={styles.info1}>
                        <label>이메일</label>
                        <span>{
                        userInfo.mb_email
                        }
                        </span>
                    </div>
                    <div className={styles.info1}>
                        <label>이름</label>
                        <span>{
                        userInfo.mb_name
                        }
                        </span>
                    </div>
                    <div className={styles.info1}>
                        <label>핸드폰번호</label>
                        <span>{
                        userInfo.mb_phone
                        }
                        </span>
                    </div>
                    <div className={styles.info1}>
                        <label>주소</label>
                        <span>{
                        userInfo.mb_addr1
                        }</span>
                    </div>
                </div>
                <button className={styles.save} onClick={save}>저장하기</button>
                <button className={styles.logout} onClick={logOut}>로그아웃</button>
            </div>
            <div className={styles.line}></div>

            <div className={styles.payment}>
                <h2>결제내역</h2>
                <p>{
                userInfo.mb_id
                }님의 결제 내역은 .... 입니다.</p>
            </div>
        </div>
        
    );

}
export default Info;