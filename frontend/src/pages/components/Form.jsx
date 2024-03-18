import styles from './Form.module.css'

function Form({name,price,description,setName,setdescription,setprice,SaveBook,ButtonName,emptyList,error,col,row,title}){

    return (
        <div className={styles.form_container} >


            <div >

            <h1>{title}</h1>
            </div>

            <div className={styles.form} >
          
       <label htmlFor="name">Name</label>
        <input  type="text" placeholder="Nome do livro" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  className={emptyList.includes('name') ? styles.error : ''}  />

        <label htmlFor="price">Price</label>
        <input  type="number" placeholder="Preco do livro" name="price" value={price} onChange={(e)=>{setprice(e.target.value)}}  className={emptyList.includes('price') ? styles.error : ''}  />

        <label htmlFor="description">Description</label><br />

                <textarea name="description" value={description}  cols={col} rows={row} onChange={(e)=>{setdescription(e.target.value)}}   ></textarea>


            <button onClick={SaveBook}>
                {ButtonName}

            </button>


            </div>

    
            {error && (
                <div className={styles.error}>
                   <h3>{error}</h3>
                </div>
            )}


        </div>
    )

}
export default Form