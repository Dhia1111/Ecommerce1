

import { useParams } from "react-router-dom"
import all_product from "../images/all_product";
import Styles from "./CardDetales.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import  {faStar as ImptyStar} from "@fortawesome/free-regular-svg-icons" 

 function GetPodectInf(id){
 
    for(let i=0 ;i<all_product.length;i++){
 
        if(all_product[i].id.toString()===id){
            
            
            return all_product[i];

        }
    }
    return null;

 }


function SendProdectInf(ProdectInf){

    

 }


export default function CardDetales(){

 const ProdectInf=GetPodectInf(useParams().id);
 let Description="A bomber jacket is a stylish, waist-length jacket originally designed for pilots, featuring a zip front, ribbed cuffs, and a sleek, versatile design. It blends functionality with fashion, making it a timeless wardrobe staple.";


 if(ProdectInf!=null)  return(
   <div className={Styles.Container}>
   
       <div className={Styles.imgContainer}>
        
    <div className={Styles.smallimgContainer}>
        
       <img alt={ProdectInf.name} src={ProdectInf.image}className={Styles.smallimg}/>
       <img alt={ProdectInf.name} src={ProdectInf.image}className={Styles.smallimg}/>
       <img alt={ProdectInf.name} src={ProdectInf.image}className={Styles.smallimg}/>
       <img alt={ProdectInf.name} src={ProdectInf.image}className={Styles.smallimg}/>
   
   
     </div>

     <img alt={ProdectInf.name} src={ProdectInf.image}className={Styles.img}/>

     </div>
     
        <div className={Styles.textContainer}>
            
        <h2 className={Styles.h2}>{ProdectInf.name}</h2>
           <ul className={Styles.Stars}>

           <FontAwesomeIcon className={Styles.Icon} icon={faStar} />
           <FontAwesomeIcon className={Styles.Icon} icon={faStar} />
           <FontAwesomeIcon className={Styles.Icon} icon={faStar} />
           <FontAwesomeIcon className={Styles.Icon} icon={ImptyStar} />
           <FontAwesomeIcon className={Styles.Icon} icon={ImptyStar} />
           </ul>
           <div className={Styles.Prices}>
           <span className={Styles.span1}>{ProdectInf.new_price}</span>
           <span className={Styles.span2}>{ ProdectInf.old_price}</span>

           </div>

           <p className={Styles.p}>{Description}</p>

              <button className={Styles.btn} id="btnAddToCard" onClick={SendProdectInf(ProdectInf)} >Add to card</button>
        </div>  
        
     </div>
   
    )
    else return (<h2 className={Styles.h2}>Thier is no prodect in the men category mush this id</h2>)
}