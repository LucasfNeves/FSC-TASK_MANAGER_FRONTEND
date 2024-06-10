import styles from "./styles.module.css";
import logo from "../../assets/images/1111.png";
import { CustomButton } from "../CustomButton/index";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        return navigate("/login");
    };
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="Full Stack Club" />
            </div>
            <div className={styles.signOut}>
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
    );
};

export { Sidebar };
