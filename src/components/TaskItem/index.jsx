import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

const TaskItem = ({ task }) => {
    return (
        <div className={styles.taskItemContainer}>
            <div className={styles.taskDescription}>
                <label
                    className={
                        task.isCompleted
                            ? styles.checkboxContainerCompleted
                            : styles.checkboxContainer
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? `${styles.checkmark} ${styles.completed}`
                                : styles.checkmark
                        }
                    ></span>
                </label>
            </div>

            <div className={styles.delete}>
                <Trash size={18} color="#F97474" weight="bold" />
            </div>
        </div>
    );
};

export { TaskItem };
