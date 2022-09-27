import { Children } from 'react';
import './Button.style.scss'

const Button=(props)=>{
    return(
     <button className={`btn ${'btn--' + props.btntype}`} onClick={props.handleclick}>{props.children}</button>
    )
    // const myclass={"btn--" + props.type}
    // return(
    //     <button className={myclass}>{props.Children}</button>
    // )
}

export default Button;












// const BUTTON_TYPE={
//     google:'google-sign-in',
//     signup:'signup-button',
//     Login:'login-button'


// }
// const Button=({childern, buttonType, ...otherprops})=>{
//     return(
//         <div></div>
//         <button className={`button-container ${BUTTON_TYPE[buttonType]}`}{...otherprops}>
//             {childern}
//         </button>
  
//         )
// }