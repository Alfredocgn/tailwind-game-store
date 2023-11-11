/* eslint-disable react/prop-types */

export const Card = ({image,title,cat,price}) => {
  return (
    <div className="bg-[#362c29]/50 px-2 py-2 flex items-center rounded-2xl flex-col gap-2 w-full md:w-auto ">
        <img src={image} alt="spiderman cover" className="w-full md:w-52 h-52 object-cover rounded-2xl" />
        <h3 className="text-lg text-white">{title}</h3>
        <span className="text-gray-500" >{cat}</span>
        <div className="flex w-full items-center gap-2 p-2">
            <h5 className="text-3xl text-[#e58d27]">${price}</h5>
            <button type="submit" className=" bg-[#e58d27] text-black font-bold p-3 rounded-full w-full ">Buy</button>
        </div>
    </div>
    
  )
}
