"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginForm = () => {
  const navigate = useRouter()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
      <div className="bg-gray-900 shadow-2xl rounded-lg p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Sign in to your account</h2>
        <form className="space-y-5">
          <div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 outline-none transition"/>
          </div>
          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 outline-none transition"/>
          </div>
          <button type="button" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition duration-300">Sign in</button>
        </form>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-cyan-500 hover:underline">Register</a>
        </p>
        <div className='w-[100px] mx-auto mt-6'>
        <button className='text-white border border-gray-800 px-2 py-1' onClick={()=> navigate.push("/")}>Go Home</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
