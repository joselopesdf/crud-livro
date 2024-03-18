import { Link } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'
import styles from './BackButon.module.css'
function BackButton({destination = '/'}){
    return (
        <div  className={styles.container}>
            <Link to={destination} >
            <FaArrowLeft className={styles.back} />
            </Link>
           
        </div>
    )
}
export default BackButton