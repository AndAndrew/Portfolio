import styles from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import {Title} from "../Common/Components/Title/Title";

export const Contacts = () => {
    return (
        <div id={'Contact'} className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contact'}/>
                <form className={styles.contactsForm}>
                    <input className={styles.input} type="text" placeholder={'company'}/>
                    <input className={styles.input} type="text" placeholder={'name'}/>
                    <textarea className={styles.textArea} placeholder={'message text'}></textarea>
                </form>
                <a href={''} className={styles.sendButton}>Send</a>
            </div>
        </div>
    )
}