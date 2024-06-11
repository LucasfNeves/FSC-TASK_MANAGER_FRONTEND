import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";

import styles from "./style.module.css";
import { TaskItem } from "../TaskItem";
import { AddTask } from "../AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback( async() => {
        try {
            const { data } = await axios.get(
                "https://fsc-task-manager-backend-1.onrender.com/tasks"
            );
            setTasks(data);
        } catch (_error) {}
    }, [])

    const LastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className={styles.tasksContainer}>
            <h2>Minhas Tarefas</h2>

            <div className={styles.lastTasks}>
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className={styles.tasksList}>
                    {LastTasks.map((task) => {
                        return (
                            <TaskItem
                                key={task._id}
                                fetchTasks={fetchTasks}
                                task={task}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={styles.completedTasks}>
                <h3> Tarefas Concluídas</h3>
                <div className={styles.tasksList}>
                    {tasks
                        .filter((task) => task.isCompleted === true)
                        .map((task) => {
                            return (
                                <TaskItem fetchTasks={fetchTasks} task={task} />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export { Tasks };
