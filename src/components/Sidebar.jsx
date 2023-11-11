import { useState } from "react";
import { RiMoneyDollarCircleLine,RiFacebookCircleFill,RiYoutubeLine,RiInstagramLine,RiTwitterXLine, RiFilterLine, RiCloseLine } from "react-icons/ri";

export const Sidebar = () => {
  const [showSidebar,setShowSidebar]= useState(false)
  return (
    <>
      <div className={`w-[80%] md:w-[40%] transition-all bg-[#181a20] p-4 shadow-2xl fixed top-0 lg:static lg:shadow-none lg:w-80 h-full text-gray-400 ${showSidebar ? "left-0" : "-left-full"}`}>
        {/* Search */}
        <div className="bg-[#362c29]/50 p-4 rounded-2xl mb-4">
          <h4 className="mb-2 text-white text-lg">Categories</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="indy" className="" />
              <label htmlFor="indy">Indy</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="MMO" className="" />
              <label htmlFor="MMO">MMO</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="adnventure" className="" />
              <label htmlFor="adventure">Adventure</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Casual Game" className="" />
              <label htmlFor="Casual Game">Casual Game</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Strategy" className="" />
              <label htmlFor="Strategy">Strategy</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Simulator" className="" />
              <label htmlFor="Simulator">Simulator</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Sports Game" className="" />
              <label htmlFor="Sports Game">Sports Game</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Action Game" className="" />
              <label htmlFor="Action Game">Action Game</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Plataforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="PC" className="" />
              <label htmlFor="PC">PC</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Playstation 5" className="" />
              <label htmlFor="Playstation 5">Playstation 5</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Playstation 4" className="" />
              <label htmlFor="Playstation 5">Playstation 4</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Xbox Series" className="" />
              <label htmlFor="Xbox Series">Xbox Series</label>
            </div>
            <div className="flex items-center gap-2" >
              <input type="checkbox" id="Nintendo" className="" />
              <label htmlFor="Nintendo">Nintendo Switch</label>
            </div>
          </div>
          <h4 className="my-4 text-white text-lg">Price</h4>
          <form className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative ">
                <RiMoneyDollarCircleLine className="absolute left-4 top-1/2 -translate-y-1/2 -z-10"/>
                <input type="number" className="bg-[#181A20] py-2 px-4 rounded-xl outline-none pl-8 pr-4 w-full"/>
              </div>
              <span>-</span>
              <div className="relative ">
                <RiMoneyDollarCircleLine className="absolute left-4 top-1/2 -translate-y-1/2 -z-10"/>
                <input type="number" className="bg-[#181A20] py-2 px-4 rounded-xl outline-none pl-8 pr-4 w-full"/>
              </div>
            </div>
            <button type="submit" className=" bg-[#e58d27] text-black font-bold p-3 rounded-full ">Apply Filter</button>
          </form>
        </div>
        {/* Social media */}
        <ul className="flex items-center justify-between">
          <li>
            <a className="text-2xl" href="https://www.facebook.com">
              <RiFacebookCircleFill/>
            </a>
          </li>
          <li>
            <a className="text-2xl" href="https://www.youtube.com">
              <RiYoutubeLine/>
            </a>
          </li>
          <li>
            <a className="text-2xl" href="https://www.instagram.com">
              <RiInstagramLine/>
            </a>
          </li>
          <li>
            <a className="text-2xl" href="https://www.twitter.com">
              <RiTwitterXLine/>
            </a>
          </li>
        </ul>
      </div>
      {/* Button */}
      <button onClick={()=> setShowSidebar(!showSidebar)} className="lg:hidden fixed bottom-4 right-0 bg-[#e58d27] p-4 rounded-full text-md">
        {showSidebar ? <RiCloseLine/> : <RiFilterLine/>}
        
      </button>    
    </>
  )
}
