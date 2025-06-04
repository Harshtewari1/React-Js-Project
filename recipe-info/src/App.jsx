import NavBar from "../components/NavBar"
import MainRoutes from "../Routes/MainRoutes"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-thin">
      <div className="fixed inset-0 bg-gray-900 -z-10"></div>
      <div className="relative z-10">
        <NavBar />
        <MainRoutes />
      </div>
    </div>
  )
}

export default App