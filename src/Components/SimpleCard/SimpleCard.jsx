import Styles from "./SimpleCArd.module.css"

function SimpleCard({Url="",OldPrice,NewPrice,Description,Alt=""}){

  
  return ( <div className={Styles.Container} >

    <img alt={Alt} src={Url}  className={Styles.img}/>
        <p className={Styles.p}>{Description}</p>
       
        <div className={Styles.Prices}>
        <span className={Styles.span1}>{NewPrice}</span>
        <span className={Styles.span2}>{OldPrice}</span>

        </div>
          </div>
   )

}


export default SimpleCard
