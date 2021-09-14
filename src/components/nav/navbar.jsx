import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({menu,setMenu}) => {

    const black = (event) => {

        const index = event.target.dataset.index;
        console.log(index);

        switch(index){
            case "0":
                document.location.href= "/info";
                break;
            case "1":
                document.location.href= "/item";
                break;
            case "2":
                document.location.href= "/cart";
                break;
            case "3":
                document.location.href= "/board";
                break;
        }   

        // setMenu((prev) => ['방글라데시' , ...prev]);
        // setMenu('방글라데시');

    }
    //const menubar = menu.map((menus) => (<li><a href="#">{menus}</a></li>))
    return(
        menu.map((menus, index) => (<li className={styles.menu} onClick={black} data-index={index}>{menus.title}</li>))
    );
        
};

export default Navbar;