import { Input } from "../../../../shared/ui/Input/Input"
import styles from "./LoginForm.module.css"

interface LoginFormProps{

}


export const LoginForm = () => {
    return(
        <form className={styles.loginForm}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Login</h2>
            </div>
            <div className={styles.formContainer}>
                <Input fieldName="Email" placeholder="Enter your email" type="email" value=""/>
                <Input fieldName="Password" placeholder="Enter your password" type="password" value=""/>
            </div>
        </form>
    )
}