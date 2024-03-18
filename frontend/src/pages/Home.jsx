import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import {FaEdit,FaInfo,FaTrash} from 'react-icons/fa'
import styles from './Home.module.css'


function Home(){

    const [books,setBooks] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3500/books').then(
            response =>{ setBooks(response.data.msg)
                setLoading(false)
            }
        )
        .catch((error)=>{
            setLoading(false)
            
            console.log(error)
            
           
        })

       
      },[])

    return (

        <div >

        <div className={styles.home} >
            <h1 className={styles.title}>Books list</h1>
             <Link to='/books/create' className={styles.Link}  >
                <h2 className={styles.title} >create</h2>
            </Link>
         </div>

            <div className={styles.table} >
            {loading ? 
            (
                <h2>loading...</h2>

            ): 
            (
                <table border={1} >

<thead >
                            <tr >
                                <th className={styles.table_title}>Number</th>
                                <th className={styles.table_title}>Name</th>
                                <th className={styles.table_title}>Price</th>
                                <th className={styles.table_title}>Description</th>
                                <th className={styles.table_title}>Operations</th>
                            </tr>
                        </thead>
                
                    <tbody>
                       {books.map((book,index)=>(
                        <tr key={book.id}>
                            <td className={styles.table_content}>{index +1}</td>
                            <td className={styles.table_content}>{book.name}</td>
                            <td className={styles.table_content}>{book.price}</td>
                            <td className={styles.table_content}>{book.description}</td>
                         <td className={styles.table_content}>
                            <div className={styles.operations_content}>
                                <Link to={`/books/details/${book.id}`}>
                                <FaInfo className={styles.details}/>
                                </Link>
                                <Link to={`/books/edit/${book.id}`}>
                                <FaEdit className={styles.edit}/>
                                </Link>
                                <Link to={`/books/delete/${book.id}`}>
                                <FaTrash className={styles.remove}/>
                                </Link>
                
                              
                            </div>

                         </td>
                        </tr>

                       ))}


                    </tbody>


                </table>

            


            )

            }
            </div>
        </div>
    )
}
export default Home