import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.item}>Main</a>
            <a href="" className={styles.item}>Skills</a>
            <a href="" className={styles.item}>Projects</a>
            <a href="" className={styles.item}>Contacts</a>
        </div>
    )
}