import { firebaseAuth } from "../../Firebase";
import { onAuthStateChanged,signOut} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import NavSection from "./NavSection.component";
// import Button from "../Button-component/Button.component";
// import { Link } from "react-router-dom"; 
// import {TiArrowSortedDown}from 'react-icons/ti';
// import {TiArrowSortedUp}from 'react-icons/ti';
import './NavSection.style.scss'


const MobileNav=()=>{
    const [user, setUser]=useState('');
    const navigate = useNavigate();
//     const [Open, SetOpen]=useState(false);


//     const OpenMenu = <TiArrowSortedUp className="menu-Icon"
//     size='40px' color="#fff" onClick={() => {
//         SetOpen(!Open)
//         console.log('you click')
//     }} />
// const CloseMenu = <TiArrowSortedDown className="menu-Icon"
//     size='40px' color="#fff" onClick={() => {
//         SetOpen(!Open)
       
//     }} />

//     const CloseMobileNavMenu = () => {
//       SetOpen(false)
//   }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if (currentUser){
        setUser(currentUser);
       
      } 
       else {
        navigate ('/SignIn')
       } 
            
    })
    return(
          <div className="MobNav">
            {/* {Open ? OpenMenu : CloseMenu}
            {Open && <NavSection isMobileNav={OpenMenu} CloseMobileNavMenu={CloseMobileNavMenu}/>} */}
          
           
           
            {/* <Link to='/CreatePost' className="HomeSection--link">Create a post</Link>
            <Button  btntype="navbtn" className="authsection--signout"  handleclick={()=>signOut(firebaseAuth)}>signout</Button> */}
        </div>
    )
}
export default MobileNav;