"use client"

import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 mt-28">
      <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white mb-2">MyApp</h2>
          <p className="text-sm text-gray-300 max-w-xs text-center md:text-left"> Discover amazing content and stay connected with us anywhere, anytime.</p>
        </div>
        

        <div className="flex flex-col items-center gap-2">
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link href="/user" className="hover:text-yellow-300 transition">User</Link>
            <Link href="/post" className="hover:text-yellow-300 transition">Post</Link>
            <Link href="/recipe" className="hover:text-yellow-300 transition">Recipe</Link>
            <Link href="/login" className="hover:text-yellow-300 transition">Login</Link>
          </nav>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-purple-700 mt-6 pt-4 pb-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. Made with <span className="text-pink-400">❤️</span> by You.
      </div>
    </footer>
  )
}

export default React.memo(Footer)
