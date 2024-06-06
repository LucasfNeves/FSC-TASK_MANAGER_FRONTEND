import styles from "./styles.module.css";

const CustomInput = ({ label, value, onChange, onEnterPress }) => {

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            onEnterPress();
        }
    }

    return (
        <div className={styles.customInputContainer}>
            <input
                type="text"
                className={styles.customInput}
                onChange={onChange}
                value={value}
                onKeyDown={(e) => handleKeyDown(e)}
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
