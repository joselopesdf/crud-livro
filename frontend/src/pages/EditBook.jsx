
import {FaArrowLeft} from 'react-icons/fa'
import axios from "axios"
import { useNavigate,useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Form from "./components/Form"
import BackButton from "./components/BackButon"


function EditBook(){

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const [loading,setLoading] =useState(false)
    const [error,setError] = useState(null)
    const [emptyList,setEmptyList]= useState([])
    const navigate = useNavigate()
    const {id} =useParams()

    useEffect(()=>{
        setLoading(true)

        axios.get(`http://localhost:3500/books/${id}`)
        .then((response)=>{
           
            setLoading(false)
           setName(response.data.msg.name)
           setPrice(response.data.msg.price)
           setDescription(response.data.msg.description)
        })
        .catch((erro)=>{
           console.log(erro)
           setLoading(false)
           
        })
       
       

    },[])

    const handleEditBook = ()=>{
        setLoading(true)
        const data = {
            name,
            price,
            description
            
        }
        axios.put(`http://localhost:3500/books/${id}`,data).then(()=>{
            setLoading(false)
            setEmptyList([])
        navigate('/')

        })
        .catch((error)=>{
            const Msg = JSON.parse(error.request.responseText)
            setError(Msg.msg)
            setEmptyList(Msg.error)
            console.log(emptyList)
            setLoading(false)
        })
       
        
        
    }
    return (
        <div>

            
        
    
            {loading ?<h2>loading...</h2> : ""}

            <Form name={name} price={price} description={description} setName={setName} ButtonName={"Editar"} setprice={setPrice} setdescription={setDescription} SaveBook={handleEditBook} emptyList={emptyList} error={error} col={20} row={10} title="Edit a Book" />

            
        </div>
    )

}
export default EditBook