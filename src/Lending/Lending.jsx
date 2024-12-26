

import Styles from "./Lending.module.css"
import arrow from "../images/arrow.png"
import handICon from "../images/hand_icon.png"
import Girl from "../images/hero_image.png"
import {Link} from "react-router-dom"
function Lending(){

  return ( 
    <> 
 <div className={Styles.Container}>

<div className={Styles.textContainer}>

<p className={Styles.NewArrivals}>NEW ARRIVALS ONLY</p>
    
    <div className={Styles.FirstTitleLine}> <span className={Styles.Title}>New</span> <img className={Styles.img2} src={handICon} alt="handImage"/></div>
    
    <span className={Styles.Title}>Collection for everyone</span>
    <Link  to="/LatestColection" ><button className={Styles.btn}> Latest Collection <img alt="Arrow" src={arrow}/></button></Link>
    
    


</div>

<img className={Styles.img} alt="" src={Girl}/> 


  </div>

    </>
 
)
}

export default Lending;