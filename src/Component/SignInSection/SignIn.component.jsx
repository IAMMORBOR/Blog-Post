import { firebaseAuth, signInWithGooglePopup  } from '../../Firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Signin.style.scss';
import Button from '../Button-component/Button.component'


//createUserDocumentFromAuth

const DefaultFormField = {
    email:'',
    password:'',
}

const SignIn = () => {
    const [FormField, SetFormField] = useState(DefaultFormField)
    const { email, password } = FormField;
    const navigate = useNavigate()

    const Handlechange = (event) => {
        const { name, value } = event.target;

        SetFormField({ ...FormField, [name]: value });
    };
    const resetFormFields = () => {
        SetFormField(DefaultFormField);
    }

    const HandleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password)
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                alert('username or password in correct. please try again');
            } else console.log(error)
            return;
        }
      
    }

   
    const LoginWithGooglePopup= async () =>{
        const User = await signInWithGooglePopup();
        // localStorage.setItem("isAuth",true);
        // setisAuth(true)
        // navigate("/HomePage")
        console.log(User)

      
        
        //await createUserDocumentFromAuth(User);
        // User = await signInWithPopup();
        
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/HomePage");
        
    })
    
    return (
    <div className='Form-Section'>
        <div className='Form-Section--container'>
            <div className='SigninSection__heading'>
                {/* <h3>Hello Again, Paadi mi</h3> */}
            </div>
            <h3 className='Form-Section--text'>SIGN IN</h3> 
            <div className="Form-Section--login__container">
                <label className='Form-Section__label'> 
                <input type='email' required placeholder='Enter your email'className='Form-Section__input'
                    onChange={Handlechange}
                    name='email'
                    value={email} />
                </label>

                <label className='Form-Section__label'>
                    <input type='password' required placeholder='Enter Your Password' className='Form-Section__input'
                        onChange={Handlechange}
                        name='password'
                    value={password} />
                </label>
            <div className='Button-component'>
                
                <button type="submit"onClick={HandleLogin} className='Button-component--main'>Login</button>
                    <button type="button" onClick={LoginWithGooglePopup} className='Button-component--google'>Login with Google</button>
                </div>
            </div>
            < span className='Form-Section--span'> Don't have an Account?
                <Link to='/'>Sign up </Link>
            </span>
        </div>
    </div>

    )
}
export default SignIn;
