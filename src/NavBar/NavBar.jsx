
import Styles from './NavBar.module.css'
import logo from "../images/logo_big.png"
import cart_icon from "../images/cart_icon.png"
import { useState } from 'react';
import {Link} from "react-router-dom"


function NavBar(){

  const [Counter,setCounter]=useState(0);

   document.addEventListener("click",(e)=>{
 if(e.target.id==="btnAddToCard"){

  setCounter(Counter+1);

 }


   }
  )


 return (
     <div  className={Styles.Container}>

      <div className={Styles.Shopper}><img className={Styles.img} alt='Logo' src={logo}></img> <span>SHOPPER</span></div>  
        <div className={Styles.Menue}>
            <Link to='/'>shop</Link>
            <Link to='/men'>men</Link>
            <Link to='/women'>women</Link>
            <Link to='/kids'>kids</Link>

        </div>

          <div className={Styles.LogInAndBasket}>
        <button className={Styles.btn}>Login</button>
        <div className={Styles.Basket}>
        <img alt='Basket' src={cart_icon}/>
        <span className={Styles.Counter} id="Card">{Counter}</span>
        
        </div></div>
        
     

    </div>
)

}

export default NavBar