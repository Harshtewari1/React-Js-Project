import NavBar from "../components/NavBar"
import MainRoutes from "../Routes/MainRoutes"

const App = () => {
  return (
    <div className="py-10 px-[10%] bg-gray-900 w-screen h-screen text-white font-thin">
      <NavBar />
      <MainRoutes />
    </div>
  )
}

export default App