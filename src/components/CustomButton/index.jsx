import styles from "./styles.module.css";

const CustomButton = ({ onClick, children }) => {
    <div className={styles.customButtonContainer} onClick={onClick}>{children}</div>;
};

export { CustomButton };
