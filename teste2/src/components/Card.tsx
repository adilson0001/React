type CardProps = {
  img: string;
  texto: string;
  
};


function Card({ img, texto }: CardProps) {
  return (
    <div className="flex flex-col items-center border-2 h-72.5 w-52 rounded-lg border-[#00A2F7]">
        
        <img src={img} alt=""  className="w-25 mx-auto mt-5 mb-5"/>
        <div>
            <p className="text-[#00A2F7] font-bold">Fundamentos do {texto}</p>
            <p className="text-[#00A2F7]">9h</p>
        </div>

        <button className="bg-[#00A2F7] w-39 h-8.75 flex justify-center items-center rounded-lg text-white font-bold cursor-pointer mt-3">Inscrever-se</button>
    </div>
  );
}

export default Card;