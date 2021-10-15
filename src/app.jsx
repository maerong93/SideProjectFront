import {BrowserRouter, Switch, Route, Link, useHistory} from 'react-router-dom';
import styles from './app.module.css';
import { useState } from 'react';
import Main from './components/main/main';
import Login from './components/login/login';
import Navbar from './components/nav/navbar';
import Footer from './components/footer/footer';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import Category from './components/category/category';
import Info from './components/category/info';
import Item from './components/category/item';
import Cart from './components/category/cart';
import Board from './components/category/board';
import Test from './components/test';
import itemJson from './data/item.json';
import ItemDetail from './components/itemDetail/itemDetail';


function App({authService}) {

  const history = useHistory();
  const [cookies1,setCookie1,removeCookie1] = useCookies(['token1']);
  const [menu, setMenu] = useState([
    {
        key: 1,
        title: "내 정보"
    },
    {
        key: 2,
        title: "상품보기"
    },
    {
        key: 3,
        title: "장바구니"
    },
  ]);
  const [items, setItem] = useState(itemJson);
  
  localStorage.setItem("key",JSON.stringify(items));

  const output = window.localStorage.getItem("key");
  const [item1,setItem1] = useState(JSON.parse(output));
  

  const [cartItem,setCartItem] = useState([]);

  let ttt = items.map((item,idx) => {
    if(item.state == true){
        //console.log(item)
      
      return item;     
    }
    //break
  })
  const moveDetail = (idx) => {

    fetch(`http://localhost:3000/api/item/${idx}`,{
      method:"get",
      headers:{
                  'Accept':  'application/json',
                  'Content-Type': 'application/json',
                  'Cache': 'no-cache'
              },
      credentials: 'include',
    })
    .then(res=> {return res.json})
    .then(res => console.log(res));
  }

  useEffect(() => {
    setCartItem(ttt);
  },[])
  const [user, userId] = useState({
    "id": 1,
    "userId": 'maerong93',
    "userPw": '1234'
  });


  const [isRemember, setIsRemember] = useState(false);

  // const logout = () => {
  //   authService.logout();
  // }
  // useEffect(()=> {
  //   authService.onAuthChange(user => {
  //     if(!user){
  //       history.push('/');
  //     }
  //   });
  // })

  // const goLogin = () => {
  //   history.push('/login');
  // }
  const quantityPlus = (item) => {

    setItem(item.quantity++);

    
  }
  const quantityMinus = (item) => {

    item.quantity > 1 && setItem(item.quantity--);

  }
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {
            window.localStorage.getItem("auth") != 200
            ? <Login authService={authService} user={user} cookies1={cookies1} setCookie1={setCookie1} removeCookie1={removeCookie1} />
            : <Info menu={menu} setMenu={setMenu} user={user} authService={authService} />        
          }
          
         
        </Route>      
        <Route exact path='/main'>
          {
            window.localStorage.getItem("auth") != 200
            ?<Login authService={authService} user={user} cookies1={cookies1} setCookie1={setCookie1} removeCookie1={removeCookie1} />
            :<Category menu={menu} setMenu={setMenu} authService={authService} />
          }
            
        </Route>
        <Route exact path='/info'>
            {
              window.localStorage.getItem("auth") == 200
              ? <Info menu={menu} setMenu={setMenu} user={user} authService={authService} />
              : <Login authService={authService} user={user} cookies1={cookies1} setCookie1={setCookie1} removeCookie1={removeCookie1}/>
            }
        </Route>
        <Route exact path='/item'>
          {
            window.localStorage.getItem("auth") == 200
            ? <Item menu={menu} setMenu={setMenu} item1={item1} setItem1={setItem1} items={items} setItem={setItem}/>
            : <Login authService={authService} user={user} cookies1={cookies1} setCookie1={setCookie1} removeCookie1={removeCookie1}/>
          }
          
        </Route>
        <Route exact path='/cart'>
            {
              window.localStorage.getItem("auth") == 200
              ? <Cart menu={menu} 
                      setMenu={setMenu} 
                      items={items}
                      item1={item1}
                      cartItem={cartItem}
                      setCartItem={setCartItem}
                      setItem={setItem} 
                      onQuantityPlus={quantityPlus}
                      onQuantityMinus={quantityMinus}
                />
              : <Login authService={authService} user={user} cookies1={cookies1} setCookie1={setCookie1} removeCookie1={removeCookie1}/>
            }
            
        </Route>
        <Route exact path='/itemDetail'>
            <ItemDetail menu={menu} setMenu={setMenu}/>
        </Route>
        <Route exact path='/board'>
            <Board menu={menu} setMenu={setMenu}/>
        </Route>
        <Route exact path='/test'>
           {/* <Test items={items} setItem={setItem} /> */}
           <Login authService={authService} user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
    

    </>
  );
}

export default App;
