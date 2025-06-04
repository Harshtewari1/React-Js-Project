import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Create from "../pages/Create"
import SingleRecipe from "../pages/SingleRecipe"
import Fav from "../pages/Fav"
const MainRoutes = () => {
  
  
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} /> 
      <Route path="/recipes/detail/:id" element={<SingleRecipe />} /> 
      <Route path="/fav" element={<Fav />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/create" element={<Create />} /> 
    </Routes>
  )
}

export default MainRoutes