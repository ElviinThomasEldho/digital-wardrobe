import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateItem from './pages/Createitem'
import EditItem from './pages/Edititem'
import ShowItem from './pages/ShowItem'
import DeleteItem from './pages/DeleteItem'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/items/create' element={<CreateItem />}/>
      <Route path='/items/details/:id' element={<ShowItem />}/>
      <Route path='/items/edit/:id' element={<EditItem />}/>
      <Route path='/items/delete/:id' element={<DeleteItem />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default App