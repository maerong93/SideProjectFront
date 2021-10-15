import { findByPlaceholderText } from '@testing-library/dom';
import React from 'react';
import styles from './item_register.module.css';
const ItemRegister = ({itemReg,SetItemReg}) => {
    
    
    const close = () => {
        SetItemReg(false);
    }
    const formItem = (e) => {    // 버튼 클릭시
        e.preventDefault();
        const fomrData = new FormData();
        const it_name = e.target.it_name.value;
        const it_cnt = e.target.it_cnt.value;
        const it_info = e.target.it_info.value;
        const it_price = e.target.it_price.value;
        const it_use = e.target.it_use.value;
        const it_main_img = e.target.it_main_img.files[0];

        fomrData.append("it_name",it_name);
        fomrData.append("it_cnt",it_cnt);
        fomrData.append("it_info",it_info);
        fomrData.append("it_price",it_price);
        fomrData.append("it_use",it_use);
        fomrData.append("it_main_img",it_main_img);

        fetch("http://localhost:3000/api/item",{
            method: "post",
            headers:{
                // 'Accept':  'application/json',
                //  'Content-Type': 'multipart/form-data',
                // 'Cache': 'no-cache'
            },
            credentials: 'include',
            body:fomrData,
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
        })

        
    }
    const register = (regiInfo) =>{

       
    }

    const handleChangeFile = (e) => {   //이미지 파일 등록
        //console.log(e.target.files[0].name);
        //const imgFiles = e.target.files[0].name;
        var imgFiles = e.target.files[0].name;
        
        console.log(document.getElementById('it_main_img'))
        return imgFiles;
    }
    //console.log(handleChangeFile());
    // const registItem = (e) => {      // 상품등록버튼 클릭시
    //     e.preventDefault();
    //     alert("Ddd")
        
    //     const it_name = document.getElementById('it_name').value;
    //     const it_cnt = document.getElementById('it_cnt').value;
    //     const it_info = document.getElementById('it_info').value;
    //     const it_price = document.getElementById('it_price').value;
    //     const it_use = document.getElementById('it_use').value;
    //     const it_main_img = document.getElementById('it_main_img').files[0].name;

    //     fomrData.append("it_name",it_name);
    //     fomrData.append("it_cnt",it_cnt);
    //     fomrData.append("it_info",it_info);
    //     fomrData.append("it_price",it_price);
    //     fomrData.append("it_use",it_use);
    //     fomrData.append("it_main_img",it_main_img);

    //     fetch("http://localhost:3000/api/item",{
    //         method: "post",
    //         headers:{
    //             // 'Accept':  'application/json',
    //              'Content-Type': 'multipart/form-data',
    //             // 'Cache': 'no-cache'
    //         },
    //         credentials: 'include',
    //         body:fomrData,
    //     })
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })

    // }
    
    
    return (
        <div className={styles.bg}>
            <div className={styles.bg1}>
                <h1 className={styles.title}>상품등록</h1>
                <form onSubmit={formItem} method="post" id="itemElem" >
                <table border="1"className={styles.regTb}>
                    <tr>
                        <td>상품명</td><td><input type="text" id="it_name"name="it_name"/></td>
                    </tr>
                    <tr>
                        <td>재고수량</td><td><input type="text" id="it_cnt"name="it_cnt"/></td>
                    </tr>
                    <tr>
                        <td>상품정보</td><td><input type="text" id="it_info"name="it_info"/></td>
                    </tr>
                    <tr>
                        <td>가격</td><td><input type="text" id="it_price"name="it_price"/></td>
                    </tr>
                    <tr>
                        <td>사용여부</td><td><select name="it_use" id="it_use"><option value="Y">Y</option><option value="N">N</option></select></td>
                    </tr>
                    <tr>
                        <td>이미지</td><td><input type="file"accept='image/jpg,impge/png,image/jpeg,image/gif' onChange={handleChangeFile} id="it_main_img"name="it_main_img"/></td>
                    </tr>                    
                </table>

                <span className={styles.clsBtn} onClick={close}>닫기</span>
                <button type="submit"  className={styles.regBtn}>상품등록</button>
                </form>
            </div>
        </div>
    )
            
};

export default ItemRegister; 