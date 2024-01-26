import classes from './Button.module.css'
console.log(classes);
const Button = ({ children, buttonClicked, isActive }) => {
    return (
        <button className={isActive ? `${classes.button}  ${classes.active}` : classes.button}  onClick={buttonClicked}>{children}</button>
    )
}

export default Button;