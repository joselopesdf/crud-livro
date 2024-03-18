import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Details from "./components/Details"
import Spinner from "./components/Spinner"
import { useNavigate } from "react-router-dom"
import BackButton from "./components/BackButon"
import styles from './showBook.module.css'

function ShowBook(){
    const [book,setBook] = useState({})
    const [loading,setLoading] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(
        ()=>{
            setLoading(true)
            axios.get(`http://localhost:3500/books/${id}`)
            .then((response)=> {
                setBook(response.data.msg)
                setLoading(false)
               
            })
            .catch((erro)=>{console.log(erro)
                setLoading(false)}
                )
           
        },[]
    )
    return (

        <div className={styles.book_content}>

            <div className={styles.book_title}
             >
            <BackButton  / >
            <h2 className={styles.title}>ShowBook</h2>


            </div>
            {loading ? <h2 className={styles.loading}>loading...</h2> : 
            <Details key={book.id} book={book} />
            }

           
            


         
           
             
        </div>
    )

}
export default ShowBook