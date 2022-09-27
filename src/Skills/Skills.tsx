import styles from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={'JS skills JS skills JS skills JS skills JS skills'}/>
                    <Skill title={'HTML'} description={'HTML skills HTML skills HTML skills HTML skills HTML skills'}/>
                    <Skill title={'CSS'}
                           description={'CSS skills CSS skills CSS skills CSS skills CSS skills CSS skills'}/>
                    <Skill title={'REACT'}
                           description={'REACT skills REACT skills REACT skills REACT skills REACT skills REACT skills'}/>
                </div>
            </div>
        </div>
    )
}