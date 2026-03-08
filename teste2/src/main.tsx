import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Pesq from './components/Pesq.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col h-screen  bg-[#F4FBFF]'>
      <Header></Header>
      
      <Pesq></Pesq>
      <Footer></Footer>
    </div>
  </StrictMode>,
)
