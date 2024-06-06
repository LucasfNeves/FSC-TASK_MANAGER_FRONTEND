import { useState } from "react";
import { CustomInput } from "../CustomInput";
import styles from "./styles.module.css";
import { CustomButton } from "../CustomButton";
import { Plus } from "phosphor-react";
import axios from "axios";
import { toast } from "react-toastify";

const AddTask = () => {
    const [task, setTask] = useState("");

    

    const handleTaskAddtion = async() => {
        try {
            if(task.length === 0) {
                return toast.error('A Tarefa precisa de descrição para ser adicionada')
            }
            await axios.post('https://fsc-task-manager-backend-1.onrender.com/tasks', {
                description: task,
                isCompleted: false
            })

            toast.success('Tarefa criada com sucesso')

        } catch(error) {
            
        }
    }

    return (
        <div className={styles.addTaskContainer}>
            <CustomInput
                label={"Adicionar tarefa..."}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <CustomButton onClick={handleTaskAddtion}>
                <Plus size={14} color="#fff" weight="bold"/>
            </CustomButton>
        </div>
    );
};

export { AddTask };
