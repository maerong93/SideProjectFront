import {React,useRef} from 'react';
import axios from 'axios';
import styles from './signup.module.css';

const SignUp = ({onOpenModal}) => {


    // const mb_id = useRef()
    // const mb_password = useRef(null)
    // const mb_name = useRef(null)    
    // const mb_email = useRef(null)
    // const mb_tel = useRef(null)
    // const mb_phone = useRef(null)
    // const mb_addr1 = useRef(null)
    // const mb_addr2 = useRef(null)
    
    const loginBtn = (e) => {
        e.preventDefault();
        const id = document.getElementById("mb_idSign").value;
        const pw = document.getElementById("mb_passwordSign").value;
        const name = document.getElementById("mb_name").value;
        const email = document.getElementById("mb_email").value;
        const tel = document.getElementById("mb_tel").value;
        const phone = document.getElementById("mb_phone").value;
        const addr1 = document.getElementById("mb_addr1").value;
        const addr2 = document.getElementById("mb_addr2").value;
       console.log(id+"Ddddddd"+pw)

        fetch("http://localhost:3000/api/user/register",{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mb_id: id,
                mb_password: pw,
                mb_name: name,
                mb_email: email,
                mb_tel: tel,
                mb_phone: phone,
                mb_addr1: addr1,
                mb_addr2: addr2,
            })
        })
        .then(response => response.json())
        .then(error => console.log(error));

    }
    


    return (
        <div className={styles.wrapModal}>
            <div className={styles.modal}>
                <div className={styles.bg}>회원가입</div>
                <div className={styles.modalBox}>
                        <div>
                            <label>아이디</label>
                            <input 
                            //ref={mb_id} 
                            type="text" id="mb_idSign"/>
                        </div>
                        <div>
                            <label>비밀번호</label>
                            <input 
                            //ref={mb_password} 
                            type="password" id="mb_passwordSign" />
                        </div>
                        <div>
                            <label htmlFor="">회원명</label>
                            <input 
                            //ref={mb_name} 
                            type="text" id="mb_name" />
                        </div>
                        <div>
                            <label>이메일</label>
                            <input 
                            //ref={mb_email} 
                            type="text" id="mb_email"/>
                        </div>
                        <div>
                            <label>전화번호</label>
                            <input 
                            //ref={mb_tel} 
                            type="text" id="mb_tel"/>
                        </div>
                        <div>
                            <label>핸드폰번호</label>
                            <input 
                            //ref={mb_phone} 
                            type="text" id="mb_phone"/>
                        </div>
                        <div>
                            <label>주소1</label>
                            <input 
                            //ref={mb_addr1} 
                            type="text" id="mb_addr1"/>
                        </div>
                        <div>
                            <label>주소2</label>
                            <input 
                            //ref={mb_addr2} 
                            type="text" id="mb_addr2"/>
                        </div>
                        <div className={styles.Btn}>
                            <button className={styles.signUpBtn} onClick={loginBtn}>회원등록</button>
                            <button className={styles.closeBtn}
                                onClick={onOpenModal}
                            >
                                닫기
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;