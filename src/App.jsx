import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
    <div className="">
      <Header/>
      <main className="h-[90vh] p-8 flex gap-8">
        <Sidebar/>
        <Content/>
      </main>
    </div>
    </>
  )
}

export default App
