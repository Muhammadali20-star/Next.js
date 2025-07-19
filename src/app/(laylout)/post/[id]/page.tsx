import React from 'react';
import PostDetails from '@/components/post.detail/PostDetails';

const PostDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`, { cache: "force-cache" });
  const post = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <PostDetails data={post} />
    </div>
  );
};

export default PostDetail;
