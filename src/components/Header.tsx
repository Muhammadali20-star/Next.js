"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router = useRouter()
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center h-20 px-4">
        <h2
          onClick={() => router.push("/")}
          className="text-white text-2xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transform transition duration-300"
        >
          MyApp
        </h2>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-white font-medium hover:text-yellow-300 transition duration-200 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/user"
            className="text-white font-medium hover:text-yellow-300 transition duration-200 hover:underline underline-offset-4"
          >
            User
          </Link>
          <Link
            href="/post"
            className="text-white font-medium hover:text-yellow-300 transition duration-200 hover:underline underline-offset-4"
          >
            Post
          </Link>
          <Link
            href="/recipe"
            className="text-white font-medium hover:text-yellow-300 transition duration-200 hover:underline underline-offset-4"
          >
            Recipe
          </Link>
          <Link
            href="/login"
            className="text-white font-medium hover:text-yellow-300 transition duration-200 hover:underline underline-offset-4"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default React.memo(Header)
