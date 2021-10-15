import axios from 'axios';
import React, { Component } from 'react';
import styles from './login.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUp from '../signup/signup';
//import Cookies from 'universal-cookie';
//import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie';



const Login = ({user, authService,removeCookie,cookies1,setCookie1,removeCookie1 }) => {

    
    const history = useHistory();
    //const cookies = Cookies();
    //const [cookies1,setCookie1,removeCookie1] = useCookies(['token1']);
    const [modalOn, setModalOn] = useState(false);
    const [login,setLogin] = useState(
        () => JSON.parse(window.localStorage.getItem("login")) || false
    );
    useEffect(()=> {
        window.localStorage.setItem("login",JSON.stringify(login));
    },[login])
    
    const onOpenModal = (e) => {
        e.preventDefault();
        setModalOn(!modalOn);
    }
    
    const false1 = () => {
        //window.localStorage.removeItem("login");
        setLogin(false);
    }

    const googleLog = () => {
        //authService.login().then(data => goToMaker(data.user.uid)).then(console.log);
    }


    const ui = useRef();
    const up = useRef();
    let expires = new Date();
    expires.setDate(Date.now() + 60 * 60 * 24 * 14);
    const getData = (key) => {
        const mb_id = document.getElementById("mb_id").value;
        const mb_pw = document.getElementById("mb_password").value;

        // axios.post("http://localhost:3000/api/user/login", { 
            
        //     mb_id:mb_id,
        //     mb_password:mb_pw,

        //     })
        // .then(function (res){
            
            
        // })
        // .catch(function (err){
        //     console.log("로그인 실패" +err);
        // })

        fetch("http://localhost:3000/api/user/login",{
            method: "post",
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mb_id:mb_id,
                mb_password:mb_pw
            }),
        })
        .then(res => {
            console.log(res.status);
            const status = res.status;

            if(status == 200){
                alert("로그인 성공");
                document.location.href="/main";
                window.localStorage.setItem("auth",status);
                window.localStorage.setItem("loginId",mb_id);
            }else{
                alert("로그인 실패");

            }
        })
       
    };
    
    const removeCk = (e) => {
        e.preventDefault();
        removeCookie1('token1');
        console.log(cookies1)

    }
    
    const logOut = () => {
        axios({
            method: 'post',
            url:'/index.php',
            headers: {
                'content-type':'application/json'
            },
            data:{
                dataLog: 'logout'                
            }
        })
        .then(result => {
            console.log(result.data)
        })
        .catch(err => console.log(err));        
    }
    

    
    return (
        <section className={styles.container}>
            <div className={styles.all}>
                <button onClick={removeCk}>removeCookie</button>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.log}>

                        <ul className={styles.logUl}>
                            <li><label className={styles.labelId}>아 이 디:</label><input ref={ui} id="mb_id" name="mb_id" type="text" /></li>
                            <li><label className={styles.labelPw}>비밀번호:</label><input ref={up} id="mb_password" name="mb_password" type="password" /></li>
                        </ul>
                        <input className={styles.lgBtn} type="button" value="LOGIN" onClick={getData}></input>
                        {/* <input type="button" onClick={googleLog} className={styles.google} value="Google Login" /> */}
                        
                        <div>
                            <a className={styles.signUp} onClick={onOpenModal} href="#">계정이 없으신가요?</a>
                            {
                               modalOn ? <SignUp onOpenModal={onOpenModal} />  : ''
                               
                            }
                        </div>
                        {/* <button type="submit"className={styles.lgBtn}>로그인</button> */}

                </div>
            </div>
        </section>
    );

}


// class Login extends Component {

//     constructor(props){
//         super(props);
//         this.userId = React.createRef();
//         this.userPw = React.createRef();
//     }
//     state = {
//         userId: '',
//         userPw: ''
//     };
//     //userId = useRef();
//     //userPw = useRef();
    

    

//     render(){

//     }

// }



    // const onSubmit = event => {
    //     event.preventDefault();
    //     const ui = userId.current.value;
    //     const up = userPw.current.value;
    //     console.log("아이디:"+ui+"비밀번호:"+up);

    //     const fetchData = async(mode,data) => {
    //         console.log("fetch 시도");
    //         fetch("/login.php",{
    //             method: 'post',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: ui,
    //                 userPw:up,
    //                 mode:mode
    //             })
    //         })
    //         .then((response)=>response.json())
    //         .then((responseJson)=>{
    //             console.log('response:', responseJson)
    //             if(responseJson.result == 0){
    //                 alert("사용 가능")
    //             } else{
    //                 if(mode==1){
    //                     alert("이미 사용중인 아이디 입니다.")
                        
    //                 }
    //             }
    //         })
    //     }
    // }


export default Login;