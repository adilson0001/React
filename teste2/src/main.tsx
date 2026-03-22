import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Pesq from './components/Pesq.tsx'
import Card from './components/Card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex flex-col h-screen  bg-[#F4FBFF]'>
      <Header></Header>
      
      
      <Pesq title="Pesquisar Livros" placeholder="Digite o nome do livro "></Pesq>

      <Card></Card>
      <Footer></Footer>
    </main>
  </StrictMode>,
)
