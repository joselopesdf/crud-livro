
const router = require("express").Router()

const BookController = require('../controllers/BookController')

router.post('/',BookController.CreateBook)
router.delete('/:id',BookController.DeleteBook)
router.put('/:id',BookController.UpdateBook)
router.get('/:id',BookController.GetBook)
router.get("/",BookController.GetBooks )


module.exports = router 