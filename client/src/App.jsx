import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Header from './Components/Header'

export default function  App() {

  const [contentTransform, setContentTransform] = useState("0");

  return (
    <BrowserRouter>
      <Header setTransform={setContentTransform}/>
      <Routes>
        <Route path='/' element={<Home transform={contentTransform}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
