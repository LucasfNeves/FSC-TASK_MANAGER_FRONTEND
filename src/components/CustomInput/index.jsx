import styles from "./styles.module.css";

const CustomInput = ({ label, value }) => {
    return (
        <div className={styles.customInputConatiner}>
            <input type="text" className={styles.customInput} />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "styles.shrink" : ""
                    } customInputLabel`}
                ></label>
            ) : null}
        </div>
    );
};

export { CustomInput };
