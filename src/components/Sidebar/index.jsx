import styles from "./styles.module.css";
import logo from "../../assets/images/1111.png";
import {CustomButton} from '../CustomButton/index'

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="Full Stack Club" />
            </div>
            <div className={styles.signOut}>
                <CustomButton>
                    Sair    
                </CustomButton>
            </div>
        </div>
    );
};

export { Sidebar };
