
const Header = () => {
  return (
    <div className="flex justify-between align-center max-w-300 my-6 w-full mx-auto">
      <img
        src="./Logo.png"
        alt=""
        className="w-62.5
       h-15"
      />
      <p
        className="bg-[#00A2F7] w-27 h-8.75 flex justify-center items-center rounded-lg text-white font-bold cursor-pointer 
shadow-[4px_4px_8px_3px_rgba(0,0,0,0.20)]
transform transition-all duration-200 ease-out
hover:scale-105
hover:shadow-[2px_2px_6px_2px_rgba(0,0,0,0.15)]"
      >
        Premium
      </p>
    </div>
  );
};

export default Header;

