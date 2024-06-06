import { Trash } from "phosphor-react";
import styles from "./styles.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const TaskItem = ({ task, fetchTasks }) => {
    const handleDeleteTask = async (id) => {
        try {
            await axios.delete(
                `https://fsc-task-manager-backend-1.onrender.com/tasks/${id}`
            );
            
            fetchTasks();

            toast.success("Tarefa deletada com sucesso");
        } catch (error) {
            console.log(error.message);
            toast.error("Erro ao deletar a tarefa");
        }
    };

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

            <div
                className={styles.delete}
                onClick={() => handleDeleteTask(task._id)}
            >
                <Trash size={18} color="#F97474" weight="bold" />
            </div>
        </div>
    );
};

export { TaskItem };
