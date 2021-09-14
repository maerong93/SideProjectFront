import React from 'react';
import styles from './signup.module.css';

const SignUp = ({onOpenModal}) => {

    return (
        <div classsName={styles.wrapModal}>
            <div className={styles.modal}>
                <div className={styles.bg}>회원가입</div>
                <div className={styles.modalBox}>
                    
                    <form action="">
                        <div>
                            <label htmlFor="">아이디</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호 확인</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input type="text" />
                        </div>
                        <div className={styles.Btn}>
                            <button className={styles.signUpBtn}>회원등록</button>
                            <button className={styles.closeBtn}
                                onClick={onOpenModal}
                            >
                                닫기
                            </button>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SignUp;