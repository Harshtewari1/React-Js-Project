import React from "react"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Discover Delicious Recipes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Explore our collection of mouth-watering recipes. From breakfast to dinner,
            find the perfect dish for any occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/recipes"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Browse Recipes
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/create"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Create Recipe
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Easy to Follow</h3>
              <p className="text-gray-400">Step-by-step instructions for perfect results every time.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Share Your Recipes</h3>
              <p className="text-gray-400">Create and share your favorite recipes with the community.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Discover New Dishes</h3>
              <p className="text-gray-400">Explore a variety of cuisines and cooking styles.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home