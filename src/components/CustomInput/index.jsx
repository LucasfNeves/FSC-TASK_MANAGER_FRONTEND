import styles from "./styles.module.css";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div className={styles.customInputContainer}>
            <input
                type="text"
                className={styles.customInput}
                onChange={onChange}
            />

            {label ? (
                <label
                    className={`${value.length > 0 ? styles.shrink : ""} ${
                        styles.customInputLabel
                    }`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export { CustomInput };
