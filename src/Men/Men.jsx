
import Styles from "./Men.module.css"
import Products from "../images/all_product"
import SimpleCard from "../Components/SimpleCard/SimpleCard";
import Header from "../Header/Header";
import {Link} from "react-router-dom"


let Elements=[];

for(let i=0 ; i<Products.length;i++){

if(Products[i].category==="men"){

    Elements.push(

      <Link key={i}  to={"/"+Products[i].id}>  <SimpleCard 
      Url={ Products[i].image} 
      OldPrice= {Products[i].old_price} 
      NewPrice={Products[i].new_price}
      Description={Products[i].name}
      Alt={Products[i].name} 
   /></Link>

    )
}

}

export default function Men(){


    return(

        <>
        
        <Header Title="Men"/>
        <div className={Styles.Container} >

            {Elements}
             
        </div>

        </>
    )

}