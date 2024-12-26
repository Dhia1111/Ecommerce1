
import SimpleCard from "../Components/SimpleCard/SimpleCard.jsx";
import Styles from "./PopulerNow.module.css"
import  Header from "../Header/Header.jsx"
import React from "react";
import new_collections from "../images/new_collections.js"
import Landing from "../Lending/Lending.jsx"
import { Link } from "react-router-dom";


let Colection=[];

for(let i=0;i<new_collections.length;i++){
 
  Colection.push(
    <Link to={"/"+new_collections[i].id}><SimpleCard 
    Url={ new_collections[i].image} 
    OldPrice= {new_collections[i].old_price} 
    NewPrice={new_collections[i].new_price}
    Description={new_collections[i].name}
    Alt={new_collections[i].name} 
 />
</Link>
  
  )}
 function PopulerNow(){
       
 
 
  
   if(Colection.length>0) return(

     <>  
      <Landing/>

       <Header Title="Populer now"/>

      <div className={Styles.Container}> 

        {Colection}
        
</div>
  </>
   
    )

    else return(<h3>Loading....</h3>)


 }

 export default PopulerNow;