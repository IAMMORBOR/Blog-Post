//import { firebaseAuth } from "../../Firebase";
import { signOutUser } from "../../Firebase";
// import { onAuthStateChanged,} from 'firebase/auth';
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './NavSection.style.scss'
import Button from "../Button-component/Button.component";
import { Link } from "react-router-dom"; 


const NavSection =(props)=>{
    // const [user, setUser]=useState('');
    // const navigate = useNavigate();

    // onAuthStateChanged(firebaseAuth,(currentUser)=>{
    //   if (currentUser){
    //     setUser(currentUser);
       
    //   } 
    //    else {
    //     navigate ('/SignIn')
    //    } 
            
    // })
  
    return(
          <div className="Nav-section">
            <Link to='/CreatePost' className="HomeSection--link">Create a post</Link>
            <Button  btntype="navbtn" className="authsection--signout"  handleclick={signOutUser}>signout</Button>
          </div>
        

    )
   

}
export default NavSection;