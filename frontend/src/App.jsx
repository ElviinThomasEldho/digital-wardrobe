import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePlayer from './pages/CreatePlayer'
import EditPlayer from './pages/EditPlayer'
import ShowPlayer from './pages/ShowPlayer'
import DeletePlayer from './pages/DeletePlayer'
import Leaderboard from './pages/Leaderboard'

const App = () => {
  return (
    <Routes>
      {/* <Route path='/admin' element={<Home />}/>
      <Route path='/players/create' element={<CreatePlayer />}/>
      <Route path='/players/details/:id' element={<ShowPlayer />}/>
      <Route path='/players/edit/:id' element={<EditPlayer />}/>
      <Route path='/players/delete/:id' element={<DeletePlayer />}/> */}
      <Route path='/' element={<Leaderboard />}/>
    </Routes>
  )
}

export default App