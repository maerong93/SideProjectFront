import axios from 'axios';
import React, { Component } from 'react';
import styles from './login.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUp from '../signup/signup';



const Login = ({user, authService}) => {
    const history = useHistory();
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
    // const goToMaker = (userId) => {
    //     history.push({
    //         pathname: '/main',
    //         state: {id:userId},
    //     });
    //}

    console.log(login)
    const googleLog = () => {
        //authService.login().then(data => goToMaker(data.user.uid)).then(console.log);
    }

    // useEffect(() => {
    //     authService
    //     .onAuthChange(user => {
    //         user && goToMaker(user.id);
    //     });
    // });

    const ui = useRef();
    const up = useRef();
    const getData = () => {
        
        //alert(this.props.user.userId)
        if(ui.current.value === user.userId && up.current.value === user.userPw){
            setLogin(true);
            document.location.href = "/main";
            console.log(login)
        }else{
            alert("로그인 실패요");
        }
        // ui.current.value === user.userId && up.current.value === user.userPw
        // ? document.location.href = "/main"
        // : alert("로그인 실패요");

        // window.localStorage.getItem("login")
        
        // history.push({
        //     pathname: '/main',
        //     state: {id:user.userId},
        // });

        // ui == this.userId.map(m => {
        //     return m.userId;
        // }) && history.push('/');

        // axios({
        //     method: 'post',
        //     url:'/index.php',
        //     headers: {
        //         'content-type':'application/json'
        //     },
        //     data: {
        //         userId: ui,
        //         userPw: up
        //     }
        // })
        // .then(response => {
        //     const data = JSON.parse(response.config.data);
        //     console.log(data.userId);
        //     console.log(response.data);
        //     console.log(response);
        // })
    };
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
            <button onClick={false1}>false</button>
            <div className={styles.all}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.log}>
                    <form method="post" >
                        <ul className={styles.logUl}>
                            <li><label className={styles.labelId}>아 이 디:</label><input ref={ui} name="userId" type="text" /></li>
                            <li><label className={styles.labelPw}>비밀번호:</label><input ref={up} name="userPw" type="password" /></li>
                        </ul>
                        <input className={styles.lgBtn} type="button" value="LOGIN" onClick={getData}></input>
                        <input type="button" onClick={googleLog} className={styles.google} value="Google Login" />
                        <div>
                            <a className={styles.signUp} onClick={onOpenModal} href="#">계정이 없으신가요?</a>
                            {
                                modalOn ? <SignUp onOpenModal={onOpenModal}/> : ''
                            }
                        </div>
                        {/* <button type="submit"className={styles.lgBtn}>로그인</button> */}
                    </form>
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