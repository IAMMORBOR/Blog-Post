import './Button.style.scss'

const Button=(props)=>{
    return(
     <button className={`btn ${'btn--' + props.btntype}`} onClick={props.handleclick}>{props.children}</button>
    )
}
export default Button;