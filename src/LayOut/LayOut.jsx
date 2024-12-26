import NavBar from "../NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

export default function LayOut(){
 return(
 <>

 <NavBar/>
 <Outlet/>
 
 </>) 
}