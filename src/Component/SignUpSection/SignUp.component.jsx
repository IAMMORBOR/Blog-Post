import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import{createUserWithEmailAndPassword, onAuthStateChanged}from 'firebase/auth'
import { firebaseAuth } from '../../Firebase'
import Button from "../Button-component/Button.component";
//import Content from "../ContentSection/Content.component";
//import { async } from "@firebase/util";
import './SignUp.style.scss'
import SignUpImage from '../imageContainner/projectImgBGR.png'


const DefaultFormField={
    UserName:'',
    Email:'',
    Password:'',
    ConfirmPassword:''
}

const SignUp=  ()=>{

    const [Feilds, SetFeilds ]=useState(DefaultFormField);
    const {UserName, Email, Password, ConfirmPassword }= Feilds;
    const navigate =useNavigate();

    const HandleFormChange=(event)=>{
        const {name, value} = event.target;

        SetFeilds({...Feilds, [name]:value});
    };
    const resetFormFields = ()=>{
        SetFeilds(DefaultFormField);
    }

    const HandleSignUp=async(e)=>{
        e.preventDefault();

        if (Password !== ConfirmPassword || Password < 6){
            alert ('Password do not match')
            return;
        }
        try {
            await createUserWithEmailAndPassword(firebaseAuth,Email, Password, UserName);
             resetFormFields();


        }catch (error) {
            if (error.code === "auth/email-already-in-use"){
                alert('Email already in use ')
            }
            console.log("user creation encounter an error", error);
            return;

        }
        onAuthStateChanged(firebaseAuth,(currentUser)=>{
            if(currentUser) navigate("/HomePage");
    
        })
        
    }
    return (
        <div className="Signup-Section">
            <img className="Signup-Section--img" src={SignUpImage}/>
            <div className="Main">
            <div className="Signup-Section--container">
                <h3 className="Signup-Section--text">SIGN UP</h3>
                <div className="SignupForm-Section">
                    <label className="Signup-Section__label">Username
                        <input className="Signup-Section__input" type="text" placeholder="Username" required
                            onChange={HandleFormChange}
                            name='UserName'
                            value={UserName} />
                    </label><br />

                    <label className="Signup-Section__label"> Email
                        <input className="Signup-Section__input" type="email" placeholder="Enter Email" required
                            onChange={HandleFormChange}
                            name='Email'
                            value={Email} />
                    </label><br />

                    <label className="Signup-Section__label"> Password
                        <input className="Signup-Section__input" type="password" placeholder="Enter Password"
                            onChange={HandleFormChange}
                            name='Password'
                            value={Password} />
                    </label><br />

                    <label className="Signup-Section__label"> Confirm Password
                            <input className="Signup-Section__input" type="password" placeholder="Confirm Password" 
                            onChange={HandleFormChange}
                            name='ConfirmPassword'
                            value={ConfirmPassword}/>
                    </label>
                </div>
                <div className="Button-component">
                    <Button type="submit" 
                        handleclick={HandleSignUp}
                        btntype="main">SignUp
                    </Button>
                </div>
                <span className="Signup-Section--span">
                    Already have an account? 
                    <Link to='./SignIn'>Login</Link>
                </span>
            </div>
            </div>
        </div>
        
    )
}
export default SignUp;