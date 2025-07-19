import PostDetails from '@/components/post.detail/PostDetails';
import React from 'react'

const PostDetail = async ({params}: {params: {id: string}}) => {

    const data = await fetch(`https://dummyjson.com/posts/${params.id}`, { cache: "force-cache" });
    const post = await data.json();
  return (
    <div>
        <PostDetails data={post}/>
    </div>
  )
}

export default PostDetail