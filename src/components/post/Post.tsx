"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

type PostProps = {
    data: { posts: IPost[];}
}

const Post: FC<PostProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-3xl font-semibold mb-8 text-center">Posts</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
      {
        data?.posts?.map((post: IPost) => (
          <div key={post.id} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col">
            <h2 onClick={()=> router.push(`/post/${post.id}`)} className="text-lg font-semibold  mb-2">{post.title}</h2>
            <p className="text-sm  flex-1 mb-3">{post.body}</p>
            <div className="mt-auto flex justify-between items-center text-xs">
              <span>Views: {post.views}</span>
              <span>Likes: {post.reactions?.likes} / Dislikes: {post.reactions?.dislikes}</span>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Post
