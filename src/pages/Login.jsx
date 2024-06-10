import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/1111.png'
import { CustomButton } from '../components/CustomButton'

import styles from './Login.module.css'

const Login = () => {
    const navigate = useNavigate()

    const handleSignClick = () => {
        return navigate('/')
    }

    return (
        <div className={styles.loginContainer}>
            <img src={logo} alt="Full Stack Task Manager" />
            <div className={styles.buttonContainer}>
                <CustomButton onClick={handleSignClick}>
                    Entrar
                </CustomButton>
            </div>
        </div>
    )
}

export {Login}