import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../nav/navbar';
import styles from './cart.module.css';
const Cart = ({menu,setMenu,items,setItem,cartItem,setCartItem,onQuantityPlus,onQuantityMinus,item1}) => {

    const [CheckList, setCheckList] = useState([]);
    const [IdList, setIdList] = useState([]);
    const itemParse = JSON.parse(window.localStorage.getItem("item"))
    for(var i=0;i < itemParse.length;i++){
        itemParse[i].cartState = false;
    }
    
    const [items1, setItems] = useState([]);
    const [chk,setChk] = useState(false);
    //console.log(items1);

    useEffect(()=>{
        fetch("http://10.10.27.12:3000/api/cart",{
            method:"GET",
            headers:{
                'Accept':  'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'include',
        })
        .then(res=> {return res.json()})
        .then(res => {
            setItems(res.data)
        });
        
        
    },[])
    

    const checkAll = (e) => {
        //document.getElementById('chkBox0').checked;
        const chkBox = document.getElementById('chkbox').checked;
        
        const idx = e.target.dataset.index;
        const chkBoxs = [];
        
        for(var i=0;i < items1.length;i++){
            chkBoxs[i] = document.getElementById(`chkBox${i}`);
            //const chkBoxs = document.getElementById('chkBox0');
            
            if(chkBox == true){
    
                
                chkBoxs[i].checked = true;
                setChk(true);       
            }else{
                chkBoxs[i].checked = false;
            }
    
        }
        
    }
    const cartOut = (e) => {
        alert("상품이 삭제 되었습니다.")
        const chkBoxs = [];
        const delIdx = [];
        for(var i=0;i < items1.length;i++){
            chkBoxs[i] = document.getElementById(`chkBox${i}`);
            if(chkBoxs[i].checked == true){
                delIdx[i] = parseInt(chkBoxs[i].dataset.index);

                // fetch(`http://localhost:3000/api/cart/8`,{
                //     method:"DELETE",
                //     headers:{
                //         'Accept':  'application/json',
                //         'Content-Type': 'application/json',
                //         'Cache': 'no-cache'
                //     },
                //     credentials: 'include',
                // })
                // .then(res=> {return res.json()})
                // .then(res => console.log(res));


                fetch(`http://10.10.27.12:3000/api/cart`,{
                    method:"DELETE",
                    headers:{
                        'Accept':  'application/json',
                        'Content-Type': 'application/json',
                        'Cache': 'no-cache'
                    },
                    body:JSON.stringify({
                        ct_id:delIdx[i]
                    }),
                    credentials: 'include',
                })
                .then(res=> {return res.json()})
                .then(res => console.log(res));
            }
        }

        //console.log(delIdx);
        //fetch("http://localhost:3000/api/cart")
    }

    const payment = () => {

    }

    return(
        <div className={styles.container}>
           
            <ul className={styles.menu}>
              <Navbar menu={menu} setMenu={setMenu}/>
            </ul>
            <h1 className={styles.title} >장바구니</h1>

            <div className={styles.list}>
                <div className={styles.check}>
                    <input type="checkbox" id="chkbox" onClick={checkAll} />
                    <button onClick={cartOut}className={styles.cartDel} >장바구니 삭제</button>
                </div>
                {
                    items1.map((item,index) => (

                        <div className={styles.list1}>
                            <div className={styles.list2}>
                                <input type="checkbox" id={`chkBox${index}`} data-index={item.id} />
                                <img className={styles.img1} src={item.it_main_img} alt="photo" />
                                <p className={styles.itemTitle}>{item.it_name}</p>
                            </div>
                            <div className={styles.list3}>
                                <div className={styles.quantity}>
                                    <button className={styles.quantityPlus} data-index={index}>+</button>
                                    <p className={styles.quantityNum}>{item.ct_cnt}</p>
                                    <button className={styles.quantityMinus}  data-index={index}>-</button>
                                </div>
                                <p className={styles.price}>{item.it_price * item.ct_cnt}원</p>
                            </div>
                        </div>  

                        ))
                   
                }
            </div>
            <div>
                <h2 className={styles.title2}>결제금액</h2>
                <button onClick={payment} className={styles.payment}>결제하기</button>
            </div>
            
        </div>
    );
}

export default Cart;