import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/upload" element={<Upload />} />
    </Routes>
  )
}

export default App
