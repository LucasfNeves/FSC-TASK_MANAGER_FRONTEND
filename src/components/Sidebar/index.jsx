import styles from "./styles.module.css";
import logo from "../../assets/images";
import {CustomButton} from '../CustomButton/index'

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="Full Stack Club" />
            </div>
            <div className={styles.signOut}>
                <CustomButton />
            </div>
        </div>
    );
};

export { Sidebar };
