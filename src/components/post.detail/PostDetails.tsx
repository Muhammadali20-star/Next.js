"use client"
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type PostProps = {
  data: IPost
}

const PostDetails: FC<PostProps> = ({ data }) => {
    const router = useRouter()

  return (
    <div className="max-w-md mx-auto mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg p-6 space-y-4 text-white">
      <h2 className="text-xl font-bold leading-snug">{data?.title}</h2>
      <p className="text-gray-300 text-sm">{data?.body}</p>

      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <span className="bg-gray-700 px-2 py-1 rounded-full">Views: {data?.views}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">
          Like {data?.reactions?.likes} / Dislikes {data?.reactions?.dislikes}
        </span>
      </div>
      <button onClick={()=> router.push("/post")} className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full font-medium shadow hover:shadow-md transform hover:scale-105 transition">Back to posts </button>
    </div>
  )
}

export default PostDetails
