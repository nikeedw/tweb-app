import { ButtonHTMLAttributes, FC } from "react"
import classes from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactChild | React.ReactNode,
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props} >
			{children}
		</button>
	)
}

export default Button