"use client"
import React, { FC } from 'react'

type PostProps = {
    data: { posts: IPost[];}
}

const Post: FC<PostProps> = ({ data }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      {
        data?.posts?.map((post: IPost) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 flex-1 mb-3">{post.body}</p>
            <div className="mt-auto flex justify-between items-center text-xs text-gray-600">
              <span>Views: {post.views}</span>
              <span>Likes: {post.reactions?.likes} / Dislikes: {post.reactions?.dislikes}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Post
