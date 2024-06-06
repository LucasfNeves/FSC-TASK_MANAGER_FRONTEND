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

            toast.success("Tarefa deletada com sucesso");
        } catch (error) {
            console.log(error.message);
            toast.error("Erro ao deletar a tarefa");
        }

        fetchTasks();
    };

    const handleCheckbox = async (task, id) => {
        try {
            const response = await axios.patch(
                `https://fsc-task-manager-backend-1.onrender.com/tasks/${id}`,
                {
                    isCompleted: !task.isCompleted,
                }
            );

            if (response.status === 200) {
                toast.success("Tarefa modificada com sucesso");
            }

            await fetchTasks();
        } catch (error) {
            console.log("Error:", error.message);
            console.log("Error details:", error);
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
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onClick={() => handleCheckbox(task, task._id)}
                    />
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
