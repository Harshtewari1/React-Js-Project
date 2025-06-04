import React from "react"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Recipe Hub</h1>
          <p className="text-xl text-gray-400">
            Your ultimate destination for discovering and sharing amazing recipes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              We believe that cooking should be accessible to everyone. Our mission is to provide
              a platform where food enthusiasts can share their favorite recipes and discover new
              culinary adventures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">What We Offer</h2>
            <ul className="text-gray-400 space-y-3">
              <li>• Easy-to-follow recipe instructions</li>
              <li>• Beautiful recipe cards with images</li>
              <li>• Category-based recipe organization</li>
              <li>• User-friendly recipe creation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Join Our Community</h2>
            <p className="text-gray-400">
              Share your culinary creations with our growing community of food lovers.
              Whether you're a professional chef or a home cook, your recipes are welcome here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Have questions or suggestions? We'd love to hear from you!
              Reach out to us at support@recipehub.com
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About