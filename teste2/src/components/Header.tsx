import "./Header.css"


const Header = () => {
  return (
    <div className="flex justify-between align-center max-w-300 m-auto w-full">
      <img src="./Logo.png" alt=""  className="w-[250px] h-[60px]"/>
      <p className="bg-[#00A2F7] w-[156px] h-[35px] flex justify-center items-center rounded-[8px] text-white font-bold cursor-pointer">Premium</p>
    </div>
  );
};

export default Header;
