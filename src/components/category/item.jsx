import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';
import ItemRegister from '../item_register/item_register';
import Navbar from '../nav/navbar';
import styles from './item.module.css';
const Item = ({match,menu,setMenu, items,setItem, item1,setItem1 }) => {
    const buttondDelete = useRef();
    const [itemReg,SetItemReg] = useState(false);
    //const [item2,setItem2] = useState(()=> JSON.parse(window.localStorage.getItem("item")) || items);
    const [item2,setItem2] = useState([]);
    const [itId, setItId] = useState([]);
    const regBtn = () => {
        SetItemReg(true);
        console.log(itemReg);
    }
    useEffect(()=>{
        fetch("http://localhost:3000/api/item/list",{
            method: 'get',
            headers:{
                'Accept':  'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'include',
        })
        .then(res => {
            return res.json();
        })
        .then(myJson => {
            setItem2(myJson.data);
        })
    },[])
    const cartIn = (e) => {
        const inx = e.target.dataset.index;
        
        console.log(inx);
        let ttt = item2.map((item)=> {
            if(item.key == inx){
                //console.log(item)
                
                return ({...item, state: false});
            }            
            return item
            
        })
        setItem2(ttt)
        window.localStorage.setItem("item",JSON.stringify(ttt));
        
        //alert("ddd")
    }
    const moveDetail = (e) => {
        const idx = e.currentTarget.dataset.index;   // 해당 item id
        document.location.href="/itemDetail";
        setItId(idx);
        console.log(idx)
        window.localStorage.setItem("idx",idx);
        
    }

    const cartOut = (e) => {
        const inx = e.target.dataset.index;
        console.log(inx);
        //setItem1(true); 
        let ttt = item2.map((item)=> {
            if(item.key == inx){
                console.log(item)
                
                return ({...item, state: true});
            }            
            return item;
            
        })
        setItem2(ttt)
        window.localStorage.setItem("item",JSON.stringify(ttt));
        
        //console.log(ttt);
    }

    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
            <Navbar menu={menu} setMenu={setMenu}/>
            </ul>

            <h1 className={styles.title} >상품목록</h1>
                <div>
                    <ul className={styles.item}>
                        {  
                            item2.map((item,index) => (

                                <li onClick={moveDetail} data-index={item.id} className={styles.item1}>
                                    
                                    <div className={styles.itemPic}>
                                        <img className={styles.img1} src={item.it_main_img} alt="pic" />
                                    </div>
                                    <div className={styles.itemCon}>
                                        <p className={styles.pp}>{item.it_name}</p>
                                        <span className={styles.price}>{item.it_price}원</span>
                                    </div>
                                </li>


                                // <li onClick={moveDetail} key={item.key} className={styles.item1}> //데이터베이스 사용 이전
                                    
                                //     <div className={styles.itemPic}>
                                //         <img className={styles.img1} src={item.imgPath} alt="pic" />
                                //     </div>
                                //     <div className={styles.itemCon}>
                                //         <p className={styles.pp}>{item.itemName}</p>
                                //         <span className={styles.price}>{item.price}원</span>
                                //         {
                                //             item.state == false
                                //             ? <button data-index={i} onClick={cartOut} className={styles.btnn1}>담기</button>
                                //             : <button data-index={i} onClick={cartIn} className={styles.btnn} value={i}>빼기</button>
                                //         }
                                //     </div>
                                // </li>
                            ))
                        }                    
                    </ul>
                </div>
               
                <div>
                    <button className={styles.RegBtn} onClick={regBtn}>상품추가</button>
                    
                </div>
                

                {
                    itemReg ? <ItemRegister itemReg={itemReg} SetItemReg={SetItemReg}/> : ''
                }
        </div>
        
    )
}

export default Item;