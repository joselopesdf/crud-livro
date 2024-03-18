const Book = require("../models/Book")

class BookController {
    static async CreateBook(req,res){

        const {name,price,description} = req.body

        let emptyList  = []

        if(!name){
            emptyList.push("name") 
        }
        if(!price){
            emptyList.push("price")    
        }

        if(emptyList.length >1){
            return res.status(400).json({msg : "nome e preco\n nao  podem ficar vazio",error : emptyList})
        }
        if(emptyList.length ==1 && emptyList[0]=="name"){
            return res.status(400).json({msg : "nome  nao pode ficar vazio",error : emptyList})
        }
        else if(emptyList.length ==1 && emptyList[0]=="price"){
            return res.status(400).json({msg : "preco  nao pode ficar vazio",error : emptyList})
        }


        const newBook = {
            name,price,description
        }
        try{
            await Book.create(newBook)
            return res.status(201).json({msg :"livro criado com sucesso",book : newBook })

        }catch(erro){
            return res.status(500).json({erro : erro })

        }

        


    }
    static async DeleteBook(req,res){

        const id = req.params.id

        const book = await Book.findOne({where :{id : id}})

        if(!book){
            return res.status(404).json({msg : "livro nao encontrado"})
        }

        try{
            await Book.destroy({where : {id : id}})
            return res.status(200).json({msg : "livro eliminado"})

        }catch(erro){
            return res.status(500).json({msg : erro})

        }
 
    }
    static async UpdateBook(req,res){

        const id = req.params.id

        const {name,price,description} = req.body
        
        let emptyList  = []

        if(!name){
            emptyList.push("name") 
        }
        if(!price){
            emptyList.push("price")    
        }

        if(emptyList.length >1){
            return res.status(400).json({msg : "nome e preco nao\n podem ficar vazio",error : emptyList})
        }
        if(emptyList.length ==1 && emptyList[0]=="name"){
            return res.status(400).json({msg : "nome  nao pode ficar vazio",error : emptyList})
        }
        else if(emptyList.length ==1 && emptyList[0]=="price"){
            return res.status(400).json({msg : "preco  nao pode ficar vazio",error : emptyList})
        }

        const book = await Book.findOne({where :{id : id}})

        const BookName = await Book.findOne({where : {name : name}})

        if(!book){
            return res.status(404).json({msg : "livro nao encontrado"})
        }

        try{
            const newBook = {name,price,description}

        await Book.update(newBook,{where :{id : id}})
        return res.status(200).json({msg : "livro atualizado",book : newBook})

        }
        catch(erro){
            return res.status(500).json({erro : erro })

        }

        
 
    }
    static async GetBook(req,res){

        const id = req.params.id

        const book = await Book.findOne({where :{id :id}})

        if (!book){
            return res.status(404).json({msg : "livro nao encontrado"})
           
        }

        res.status(200).json({msg :book})
    }
    static async GetBooks(req,res){

        const id = req.params.id

        const book = await Book.findAll()

        if (book.length == 0){
            return res.status(404).json({msg : "livro nao encontrado"})
        }

        res.status(200).json({msg :book})
    }

}

module.exports = BookController