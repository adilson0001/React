import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col justify-between h-screen bg-[#F4FBFF]'>
      <Header></Header>
      <div className='flex-1'>
        <p >banana</p>
      </div>
      <Footer></Footer>
    </div>
  </StrictMode>,
)
