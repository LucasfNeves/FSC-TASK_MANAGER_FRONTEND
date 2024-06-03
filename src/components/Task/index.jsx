import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./style.module.css";
import { TaskItem } from "../TaskItem";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://fsc-task-manager-backend-1.onrender.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className={styles.tasksContainer}>
            <h2>Minhas Tarefas</h2>

            <div className={styles.lastTasks}>
                <h3>Últimas Tarefas</h3>
                <div className={styles.tasksList}>
                   {tasks.filter(task => task.isCompleted === false).map(task => {
                    return <TaskItem task={task} />
                   })}
                </div>
            </div>

            <div className={styles.completedTasks}>
                <h3> Tarefas Concluídas</h3>
                <div className={styles.tasksList}>
                    {tasks.filter( task => task.isCompleted === true).map(task => {
                        return <TaskItem task={task} />
                    })}
                </div>
            </div>
        </div>
    );
};

export { Tasks };
