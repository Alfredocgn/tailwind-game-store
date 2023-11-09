import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
    <div className="">
      <Header/>
      <main className="h-[90vh] p-8 flex">
        <Sidebar/>
        <div className="flex-1 h-full overflow-y-scroll ">Content</div>
      </main>
    </div>
    </>
  )
}

export default App
