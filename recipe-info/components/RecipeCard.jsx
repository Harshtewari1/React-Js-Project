import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link
                to={`/recipes/detail/${id}`}
                className='block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
            >
                <div className="relative overflow-hidden group">
                    <img
                        className='w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300'
                        src={image}
                        alt={title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4">
                    <h2 className='text-xl font-bold text-white mb-2 line-clamp-1'>{title}</h2>
                    <p className='text-sm text-green-400 mb-2'>By {chef}</p>
                    <p className='text-gray-400 text-sm line-clamp-2'>{desc}</p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-sm">View Recipe</span>
                        <motion.span
                            whileHover={{ x: 5 }}
                            className="text-green-400"
                        >
                            →
                        </motion.span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default RecipeCard