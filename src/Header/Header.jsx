
import Styles from "./Header.module.css"

function Header({Title=""}){


    return(<h2 className={Styles.Title}>{Title}</h2>)

}

export default Header;