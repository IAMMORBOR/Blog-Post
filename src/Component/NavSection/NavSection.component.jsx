import { firebaseAuth } from "../../Firebase";
import { onAuthStateChanged,signOut} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './NavSection.style.scss'
import Button from "../Button-component/Button.component";
import { useEffect } from "react";

const NavSection=()=>{
    const [user, setUser]=useState('');
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if (currentUser){
        setUser(currentUser);
       
      } 
       else {
        navigate ('/SignIn')
       } 
            
    })

  
    return(
        <div className="authsection">
        <div className="authsection--user">
            {/* <img className="authsection--img" src={localStorage.getItem("profilePicture")}/>
                {localStorage.getItem("name")} */}
             <div className="userDetails">welcome {user?.email}</div>
        </div>
        <Button  btntype="main" className="authsection--signout"  handleclick={()=>signOut(firebaseAuth)}>signout</Button>
    </div>

    )
   

}
export default NavSection;