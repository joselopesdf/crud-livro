import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import './App.css'
import CreateBook from './pages/CreateBook'
import Home from './pages/Home'
import DeleteBook  from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'


function App() {

  return (

    <Router>
      <Routes>

        <Route path='/'  element = {<Home/>}  />
        <Route path='/books/create'  element = {<CreateBook/>}  />
        <Route path='/books/details/:id'  element = {<ShowBook/>}  />
        <Route path='/books/edit/:id'  element = {<EditBook/>}  />
        <Route path='/books/delete/:id'  element = {<DeleteBook/>}  />


      </Routes>



    </Router>

    
  )
}

export default App
