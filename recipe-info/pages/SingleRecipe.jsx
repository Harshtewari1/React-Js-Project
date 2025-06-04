import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const SingleRecipe = () => {
    const params = useParams();
    const { data, setdata } = useContext(recipecontext)
    const navigate = useNavigate()

    const recipe = data.find((recipe) => params.id == recipe.id)

    const { register, handleSubmit } = useForm({
        defaultValues: recipe ? {
            title: recipe.title,
            image: recipe.image,
            instruction: recipe.instruction,
            ingredints: recipe.ingredints,
            desc: recipe.desc,
            category: recipe.category
        } : {}
    })

    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copyData = [...data]
        copyData[index] = { ...copyData[index], ...recipe }
        setdata(copyData);
        toast.success("Recipe updated successfully! 🎉")
    }

    const deleteHandler = () => {
        const filterData = data.filter((r) => r.id != params.id);
        setdata(filterData);
        toast.success("Recipe deleted successfully! 🗑️")
        navigate("/recipes")
    }

    if (!recipe) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full min-h-screen bg-gray-900 py-8'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
    
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-800 rounded-2xl p-6 shadow-xl"
                    >
                        <h1 className='text-4xl font-bold text-white mb-4'>{recipe.title}</h1>
                        <div className="relative overflow-hidden rounded-xl mb-6 group">
                            <img
                                className='w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300'
                                src={recipe.image}
                                alt={recipe.title}
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">Description</h3>
                                <p className="text-gray-300">{recipe.desc}</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">Ingredients</h3>
                                <p className="text-gray-300">{recipe.ingredints}</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">Instructions</h3>
                                <p className="text-gray-300">{recipe.instruction}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-800 rounded-2xl p-6 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Edit Recipe</h2>
                        <form className="space-y-4" onSubmit={handleSubmit(UpdateHandler)}>
                            <div className="space-y-2">
                                <label className="text-gray-300">Image URL</label>
                                <input
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("image")}
                                    type='url'
                                    placeholder='Enter image URL'
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300">Recipe Title</label>
                                <input
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("title")}
                                    type='text'
                                    placeholder='Recipe Title'
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300">Description</label>
                                <textarea
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("desc")}
                                    placeholder='Recipe Description'
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300">Ingredients</label>
                                <textarea
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("ingredints")}
                                    placeholder='Write ingredients separated by commas'
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300">Instructions</label>
                                <textarea
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("instruction")}
                                    placeholder='Cooking Instructions'
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-300">Category</label>
                                <select
                                    className='w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 transition-all'
                                    {...register("category")}
                                >
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                                    type="submit"
                                >
                                    Update Recipe
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={deleteHandler}
                                    className='flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                                >
                                    Delete Recipe
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default SingleRecipe