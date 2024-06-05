import { useState } from 'react'
import { CustomInput } from '../CustomInput'
import styles from './styles.module.css'

const AddTask = () => {
    const [task, setTask] = useState('')

    return (
        <div className={styles.addTaskContainer}>
            <CustomInput label={'Adicionar tarefa...'} value={task} onChange={(e) => setTask(e.target.value)}/>
        </div>
    )
}

export {AddTask}