import { useState } from "react";
import { CustomInput } from "../CustomInput";
import styles from "./styles.module.css";
import { CustomButton } from "../CustomButton";
import { Plus } from "phosphor-react";

const AddTask = () => {
    const [task, setTask] = useState("");

    return (
        <div className={styles.addTaskContainer}>
            <CustomInput
                label={"Adicionar tarefa..."}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <CustomButton>
                <Plus size={14} color="#fff" weight="bold"/>
            </CustomButton>
        </div>
    );
};

export { AddTask };
