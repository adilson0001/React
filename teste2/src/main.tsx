import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Pesq from "./components/Pesq.tsx";
import Card from "./components/Card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col h-[96vh] bg-[#F4FBFF]">
      <Header></Header>

      <Pesq
        title="Pesquisar Videos"
        placeholder="Digite o nome do video "
      ></Pesq>

      <div className="bg-white rounded-md py-2 w-260 mx-auto  ">

        <p className="text-[#00A2F7] font-bold text-center text-2xl">Cursos mais procurados</p>

        <div className="flex justify-between mt-6">
        <Card img="react.png" texto="React"></Card>
        <Card img="next.png" texto="Next.js"></Card>
        <Card img="tailwind.png" texto="TailwindCSS"></Card>
        <Card img="node.png" texto="Node.js"></Card>
        </div>
        
        
      </div>



      
    </main>
    <Footer></Footer>
  </StrictMode>
);
