import React from 'react'
import Post from "@/components/post/Post";

const PostPage = async () => {
  const data = await fetch("https://dummyjson.com/posts?limit=12", { cache: "no-store" });
  const posts = await data.json();

  return (
    <div>
      <Post data={posts} />
    </div>
  );
};

export default PostPage;
