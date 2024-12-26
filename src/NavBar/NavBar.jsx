
import Styles from './NavBar.module.css'
import logo from "../images/logo_big.png"
import cart_icon from "../images/cart_icon.png"
import { useState } from 'react';


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
            <a href='/'>shop</a>
            <a href='/men'>men</a>
            <a href='/women'>women</a>
            <a href='/kids'>kids</a>

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