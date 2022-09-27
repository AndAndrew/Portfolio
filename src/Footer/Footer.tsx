import styles from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Andrey Krivokhizhin</h2>
                <div className={styles.socialContainer}>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                </div>
                <div className={styles.copyrights}>© 2022 All rights reserved</div>
            </div>
        </div>
    )
}