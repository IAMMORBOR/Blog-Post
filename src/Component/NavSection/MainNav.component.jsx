import { firebaseAuth } from "../../Firebase";
import { onAuthStateChanged} from 'firebase/auth';
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";
import './NavSection.style.scss'
import MobileNav from "./MobileNav.component";
import DeskNav from "./NavSection.component";


const MainNav=()=>{
    const [user, setUser]=useState('');
    //const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if (currentUser){
        setUser(currentUser);
       
      } 
    });

    return(
        <div className="MainNav">
            <div className="authsection--user">
              {/* <img className="authsection--img" src={localStorage.getItem("profilePicture")}/>
                  {localStorage.getItem("name")} */}
              <div className="userDetails">welcome {user?.email}</div>
          </div>
          <DeskNav/>
          <MobileNav/>
        </div>
    )
}
export default MainNav;