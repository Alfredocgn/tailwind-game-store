import { Card } from "./Card"

export const Content = () => {
  return (
    <div className="flex-1 h-full ">
        {/* Portada */}
        <div className="rounded-xl mb-6">
            <img src="https://stevivor.com/wp-content/uploads/2022/02/horizon-forbidden-west-990x556.webp" alt="Cover" className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"/>
        </div>
        <div className="flex items-center md:justify-around flex-wrap gap-4 lg:gap-2">
          <Card image={"https://i.blogs.es/8449ea/playstation_2023-09-14_21-27-58/500_333.webp"} title={"Marvel's Spider-Man"} cat={"PS5"} price={"51"}/>
          <Card image={"https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png"} title={"Resident Evil 7: Biohazard"} cat={"PS4"} price={"60"}/>
          <Card image={"https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"} title={"God of War: Ragnarök"} cat={"PS5"} price={"50"}/>
          <Card image={"https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-1920x1080-398e19351a82.jpg"} title={"FIFA 23"} cat={"PS5"} price={"40"}/>
          <Card image={"https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png"} title={"Hogwarts Legacy"} cat={"PS5"} price={"60"}/>
          <Card image={"https://assetsio.reedpopcdn.com/ghost-of-tsushima-review-a-likeable-if-clunky-hollywood-blockbuster-1594727460287.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"} title={"Ghost of Tsushima"} cat={"PS5"} price={"35"}/>
          <Card image={"https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/e5cf467175f4a1455ce65b4688952b391d3e15bde9114698.png"} title={"Call of Duty®: Warzone"} cat={"PS5"} price={"25"}/>
          <Card image={"https://image.api.playstation.com/vulcan/ap/rnd/202011/1819/m7gCTrMRQBTPHi87Mi3leVVY.jpg"} title={"Little Nightmares 2"} cat={"PC"} price={"55"}/>
        </div>
    </div>
  )
}
