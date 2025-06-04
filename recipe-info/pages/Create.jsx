import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaImage, FaUtensils, FaList, FaBook, FaTag } from 'react-icons/fa';

const Create = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipecontext)
  const [previewImage, setPreviewImage] = useState('')
  const [activeStep, setActiveStep] = useState(1)

  const { register, handleSubmit, reset, watch } = useForm()
  const imageUrl = watch("image")

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()
    recipe.chef = "Your Name" 
    const copydata = [...data]
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("New Recipe Created! 🎉")
    reset()
    navigate("/recipes")
  }

  const steps = [
    { number: 1, title: "Basic Info" },
    { number: 2, title: "Ingredients" },
    { number: 3, title: "Instructions" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 py-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Create New Recipe</h1>
          <p className="text-gray-400">Share your culinary masterpiece with the world</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= step.number ? 'bg-green-500' : 'bg-gray-700'
                  } text-white font-semibold`}
              >
                {step.number}
              </div>
              <div className="text-white ml-2">{step.title}</div>
              {step.number < steps.length && (
                <div className="w-16 h-1 mx-4 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(SubmitHandler)}
          className="bg-gray-800 rounded-2xl p-6 shadow-xl"
        >

          <div className="mb-8">
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaImage className="text-green-500" />
              <label>Recipe Image</label>
            </div>
            <input
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all mb-4'
              {...register("image")}
              type='url'
              placeholder='Enter image URL'
              required
              onChange={(e) => setPreviewImage(e.target.value)}
            />
            {previewImage && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaUtensils className="text-green-500" />
              <label>Recipe Title</label>
            </div>
            <input
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
              {...register("title")}
              type='text'
              placeholder='Enter recipe title'
              required
            />

            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaTag className="text-green-500" />
              <label>Category</label>
            </div>
            <select
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
              {...register("category")}
              required
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>

            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaBook className="text-green-500" />
              <label>Description</label>
            </div>
            <textarea
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
              {...register("desc")}
              placeholder='Describe your recipe...'
              rows="3"
              required
            ></textarea>

            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaList className="text-green-500" />
              <label>Ingredients</label>
            </div>
            <textarea
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
              {...register("ingredints")}
              placeholder='List ingredients (separated by commas)'
              rows="4"
              required
            ></textarea>

            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaBook className="text-green-500" />
              <label>Instructions</label>
            </div>
            <textarea
              className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
              {...register("instruction")}
              placeholder='Step by step cooking instructions'
              rows="6"
              required
            ></textarea>
          </div>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
              type="submit"
            >
              Create Recipe
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/recipes')}
              className='flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
              type="button"
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Create