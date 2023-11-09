import { RiShoppingCartLine,RiHeart2Line } from "react-icons/ri";

export const Header = () => {
  return (
    <header className= "h-[10vh] text-gray-300 p-4 flex items-center justify-between bg-[#181a20] z-40 ">
      {/* Menu */}
      <ul className="flex items-center gap-6">
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">Streams</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">Game Store</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27] transition-colors">News</a>
        </li>
      </ul>
      {/* Menu del usuario */}
      <ul className="flex gap-6 items-center text-xl">
        <li>
          <button className="hover:text-[#E58D27] transition-colors"><RiShoppingCartLine/></button>
        </li>
        <li>
          <button className="hover:text-[#E58D27] transition-colors"><RiHeart2Line/></button>
        </li>
        <li>
          <button><img className="w-8 h-8 rounded-full object-cover ring-2 ring-[E58D27]" src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=996&t=st=1699492802~exp=1699493402~hmac=ae373e3655c20bd260807ad5460ef95a9c2bc7b153a7a728cd53309288e37d1e" alt="person" /></button>
        </li>
      </ul>


    </header>
  )
}
