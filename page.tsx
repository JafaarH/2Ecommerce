"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Cart from './Components/Cart'
import "./Components/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ShopProvider} from './Context/Context'


export default function Home() {
  return (
    <ShopProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </ShopProvider>
  )
}
