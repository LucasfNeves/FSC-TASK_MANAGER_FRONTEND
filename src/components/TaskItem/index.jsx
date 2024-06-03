import styles from './styles.module.css'

const TaskItem = ({ task }) => {
    return (
        <p>
            <span className={''}>{task.description}</span>
            <p>{task.isCompleted ? 'Completa' : 'Não Completa'} </p>
        </p>
    )
}

export {TaskItem}