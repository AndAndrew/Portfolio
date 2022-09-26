import styles from './Skill.module.css'

type PropsType = {
    title: string,
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}