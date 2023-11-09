
export const Sidebar = () => {
  return (
    <div className="w-80 h-full text-gray-400">
      {/* Search */}
      <div className="bg-[#362c29] p-4 rounded-xl">
        <h4 className="mb-2">Categories</h4>
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
        <h4 className="my-4">Plataforms</h4>
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
        <h4 className="my-4">Plataforms</h4>
        <form action="#">
          <div>
            <input type="number" className="bg-[#181A20] py-2 px-4 rounded-xl"/>

          </div>
        </form>
      </div>
      {/* Social media */}
      <div></div>
    </div>
  )
}
