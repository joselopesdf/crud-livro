import BackButton from "./components/BackButon"
import {FaArrowLeft} from 'react-icons/fa'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import Form from "./components/Form"




function CreateBook(){


    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const [loading,setLoading] =useState(false)
    const [error,setError] = useState(null)
    const [emptyList,setEmptyList]= useState([])
    const navigate = useNavigate()


    const handleSaveBook = (e)=>{
        e.preventDefault()
        const data = {
            name,price,description
        }
        setLoading(true)


        axios.post('http://localhost:3500/books',data)
        .then((response)=>{
          
            setEmptyList([])
            console.log(response.data.msg)
            setLoading(false)
            navigate('/')
        })
        .catch((erro)=>{
            setLoading(false)
            const Msg = JSON.parse(erro.request.responseText)
            setError(Msg.msg)
            setEmptyList(Msg.error)
            console.log(emptyList)
             
    })
       
    }
    return (

        <div >
            
          
            {loading ? <h2>loading...</h2>: ""}
         
            <Form name={name} price={price} description={description} setName={setName} ButtonName={"Criar"} setprice={setPrice} setdescription={setDescription} SaveBook={handleSaveBook} emptyList={emptyList} error={error} col={20}   row={10} title="Create a Book" />
     
        </div>
    )
}
export default CreateBook