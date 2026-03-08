function Pesq() {
  return (
    // pai
    <div className="my-3 mx-auto">
      {/* textos */}
      <div className="text-center">
        <p className="text-[#00A2F7] text-3xl">
          Busque o conteúdo que deseja assistir hoje
        </p>

        <p className="text-[#09A3FB] text-[19px]">
          Conteúdo exclusivo todos os dias
        </p>
      </div>

      {/* barra de pesquisa */}
      <div className="w-170 max-w-3xl relative my-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="text"
          placeholder="Curso de react"
          className="w-full bg-white text-gray-600 placeholder-gray-400 
    rounded-lg py-3 pl-11 pr-4 outline-none
    shadow-[3px_4px_12px_1px_rgba(0,0,0,0.10)]
    transition-all duration-200 ease-out
    hover:shadow-[4px_6px_16px_2px_rgba(0,0,0,0.14)]
    focus:shadow-[4px_6px_18px_2px_rgba(0,0,0,0.16)] cursor-pointer"
        />
      </div>



    </div>
  );
}

export default Pesq;
