import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaUtensils, FaInfoCircle, FaPlus } from 'react-icons/fa'
import { MdFavorite } from "react-icons/md";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <NavLink to="/" className="flex items-center space-x-2">
              <FaUtensils className="text-green-500 text-2xl" />
              <span className="text-xl font-bold text-white">RecipeHub</span>
            </NavLink>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive
                  ? 'text-green-500 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive
                  ? 'text-green-500 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              <FaUtensils />
              <span>Recipes</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive
                  ? 'text-green-500 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              <FaInfoCircle />
              <span>About</span>
            </NavLink>

            <NavLink
              to="/fav"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive
                  ? 'text-green-500 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              <MdFavorite />
            </NavLink>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to="/create"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaPlus />
                <span>Create Recipe</span>
              </NavLink>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-lg ${isActive
                ? 'text-green-500 bg-gray-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-lg ${isActive
                ? 'text-green-500 bg-gray-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            <FaUtensils />
            <span>Recipes</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-lg ${isActive
                ? 'text-green-500 bg-gray-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            <FaInfoCircle />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/fav"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-lg ${isActive
                ? 'text-green-500 bg-gray-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            <MdFavorite />
          </NavLink>

          

          <NavLink
            to="/create"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
          >
            <FaPlus />
            <span>Create Recipe</span>
          </NavLink>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar