import React, { useContext } from "react"
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from "../components/RecipeCard";
import { motion } from 'framer-motion';

const Recipes = () => {
  const { data } = useContext(recipecontext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Our Delicious Recipes
        </motion.h1>

        {data.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {data.map((recipe) => (
              <motion.div key={recipe.id} variants={item}>
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 text-xl py-12"
          >
            No Recipes Found
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Recipes