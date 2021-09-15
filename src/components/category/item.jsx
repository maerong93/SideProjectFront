import React, { useEffect, useRef, useState } from 'react';
import ItemRegister from '../item_register/item_register';
import Navbar from '../nav/navbar';
import styles from './item.module.css';
const Item = ({menu,setMenu, items,setItem, item1,setItem1 }) => {
    const buttondDelete = useRef();
    const [itemReg,SetItemReg] = useState(false);
    const [item2,setItem2] = useState(()=> JSON.parse(window.localStorage.getItem("item")) || items);
    console.log(item2)
    const regBtn = () => {
        SetItemReg(true);
        console.log(itemReg);
    }

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
    
    const cartOut = (e) => {
        const inx = e.target.dataset.index;
        console.log(inx);
        //setItem1(true);
        let ttt = item2.map((item)=> {
            if(item.key == inx){
                console.log(item)
                
                return ({...item, state: true});
            }            
            return item            
            
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
                            item2.map((item,i) => (
                                <li key={item.key} className={styles.item1}>
                                    
                                    <div className={styles.itemPic}>
                                        <img className={styles.img1} src={item.imgPath} alt="pic" />
                                    </div>
                                    <div className={styles.itemCon}>
                                        <p className={styles.pp}>{item.itemName}</p>
                                        <span className={styles.price}>{item.price}원</span>
                                        {
                                            item.state == false
                                            ? <button data-index={i} onClick={cartOut} className={styles.btnn1}>담기</button>
                                            : <button data-index={i} onClick={cartIn} className={styles.btnn} value={i}>빼기</button>
                                        }
                                    </div>
                                </li>
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