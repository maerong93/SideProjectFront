import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../nav/navbar';
import styles from './cart.module.css';
const Cart = ({menu,setMenu,items,setItem,cartItem,onQuantityPlus,onQuantityMinus}) => {

    const [CheckList, setCheckList] = useState([]);
    const [IdList, setIdList] = useState([]);
    const [items1, setItems] = useState(items);
    const [chk,setChk] = useState([]);

    let ttt = items.map((item,idx) => {
        if(item.state == true){
            //console.log(item)
            return item;                 
        }
        //console.log(item);
        //return item;
    })
    console.log(items[0].imgPath)
    
    
    
    // const dataSet = () => {
    //     setCartItem(ttt);

    //     // for(var i =0;i < cartItem.length;i++){
    //     //     if(cartItem[i].state == false){
    //     //         setCartItem(cartItem.filter(item => item.state === false));
    //     //     }
    //     // }
        
    // }
    //console.log(cartItem[1].price)
    const [count, setCount] = useState(
        () => JSON.parse(window.localStorage.getItem("count")) || 0
    );
    useEffect(()=>{
        window.localStorage.setItem("count",JSON.stringify(count));
    },[count])
    const checkAll = (e) => {

        const chkBox = document.getElementById('chkbox').checked;
        const idx = e.target.dataset.index;
        
        if(chkBox == true){
            const chkBoxs = document.getElementById(`chkBox${e}`);
            console.log(chk);            
        }

        for(var i=0;i < items.length;i++){
            chk.push(document.getElementById(`chkBox${i}`).checked);            
        }
    }
    
    const quantityPlus = (e) => {        
        const inx = e.target.dataset.index;
        onQuantityPlus(items1[inx]);        
        //console.log(items1)
        console.log(items1[inx])
    }

    const quantityMinus = (e) => {
        const inx = e.target.dataset.index;
        onQuantityMinus(items1[inx]);
        
    }
    //console.log(items1)
    return(
        <div className={styles.container}>
            <button onClick={()=>setCount(count+1)}>{count}</button>
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>
            <h1 className={styles.title} >장바구니</h1>

            <div className={styles.list}>
                <div className={styles.check}>
                    <input type="checkbox" id="chkbox" onChange={checkAll} />
                    <button className={styles.cartDel}>장바구니 삭제</button>
                </div>

                {              
                items.map((item,index) => (

                    <div className={styles.list1}>                        
                        <div className={styles.list2}>
                            <input type="checkbox" id={`chkBox${index}`} data-index={index} />
                            <img className={styles.img1} src={item.imgPath} alt="photo" />
                            <p className={styles.itemTitle}>{item.itemName}</p>
                        </div>                            
                        <div className={styles.list3}>
                            <div className={styles.quantity}>
                                <button className={styles.quantityPlus} onClick={quantityPlus} data-index={index}>+</button>
                                <p className={styles.quantityNum}>{item.quantity}</p>
                                <button className={styles.quantityMinus} onClick={quantityMinus} data-index={index}>-</button>
                            </div>
                            <p className={styles.price}>{item.price * item.quantity}원</p>
                        </div>
                    </div>  

                ))
                }
                <button>데이터</button>
            </div>
            <h2 className={styles.title2}>결제금액</h2>
        </div>
    );
}

export default Cart;