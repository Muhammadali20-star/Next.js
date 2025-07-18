import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-400 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-300 text-lg font-semibold tracking-wider">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
