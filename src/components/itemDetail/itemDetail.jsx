import React from 'react';
import { useEffect,useState } from 'react';
import Navbar from '../nav/navbar';
import styles from './itemDetail.module.css';

const ItemDetail = ({menu ,setMenu}) => {  
    const [items, setItems] = useState([]);
    useEffect(() => {
        const idx = window.localStorage.getItem('idx');
        fetch(`http://10.10.27.12:3000/api/item/${idx}`,{
            method:"get",
            headers:{
                        'Accept':  'application/json',
                        'Content-Type': 'application/json',
                        'Cache': 'no-cache'
                    },
            credentials: 'include',
        })
        .then(res=> {return res.json()})
        .then(res => setItems(res.data[0]))
    }, [])

    const cartIn = () => {
        alert("장바구니에 담겼습니다.");
        
        const ct_cnt = parseInt(document.getElementById("ct_cnt").value);
        const it_id = parseInt(items.id);
        fetch("http://10.10.27.12:3000/api/cart",{
            method:"POST",
            headers:{
                'Accept':  'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'include',
            body:JSON.stringify({
                it_id:it_id,
                ct_cnt:ct_cnt
            })
        })
        .then(res=> {return res.json()})
        .then(res => console.log(res));
    }

    return (
        
        <div className={styles.container}>
            <ul className={styles.menu}>
            <Navbar menu={menu} setMenu={setMenu}/>
            </ul>

            <h1 className={styles.title} >상품 상세 목록</h1>
                <div className={styles.wrapContent}>
                   <div className={styles.mainImg}>
                        <img src={items.it_main_img}/>
                   </div>
                   <div className={styles.content}>
                        <table border="1">
                            <tr>
                                <td><label htmlFor="">상품명</label></td>
                                <td>{items.it_name}</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">가격</label></td>
                                <td>{items.it_price}</td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">수량</label></td>
                                <td><input type="number" name="ct_cnt" id="ct_cnt"/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button onClick={cartIn}>장바구니</button>
                                    <select name="" id="">
                                        <option value="">사용</option>
                                        <option value="">미사용</option>
                                    </select></td>
                            </tr>
                        </table>
                   </div>
                </div>
        </div>
        
    )
    
    
};

export default ItemDetail;