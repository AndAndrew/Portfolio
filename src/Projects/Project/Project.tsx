import styles from './Project.module.css'

type PropsType = {
    title: string,
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <a href={''} className={styles.viewButton}>View</a>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}