import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const  {id} = useParams
import BackButton from './components/BackButon'

import styles from './DeleteBook.module.css'


function DeleteBook(){
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const handleDeleteBook = ()=>{
        setLoading(true)
        axios.delete(`http://localhost:3500/books/${id}`).then(()=>{
            setLoading(false)
            navigate("/")
        })
        .catch((erro)=>{console.log(erro)
          
        })
       
       

    }
    return (

        <div className={styles.container} >
        
            
            {loading ? <h2>loading...</h2> : ""}

        
                
                <h3 className={styles.title} >
                Are you sure you want to delete this book?
                </h3>
                <button className={styles.btn} onClick={handleDeleteBook}>yes Delete it</button>
                
        
               
        </div>
    )
}
export default DeleteBook