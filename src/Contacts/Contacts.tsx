import styles from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactsForm}>
                    <input className={styles.input} type="text"/>
                    <input className={styles.input} type="text"/>
                    <textarea className={styles.textArea}></textarea>
                </form>
                <a href={''} className={styles.sendButton}>Send</a>
            </div>
        </div>
    )
}