"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router =  useRouter()
  return (
    <header className='h-20 bg-gray-200 pt-6'>
      <nav className='container mx-auto flex justify-between items-center'>
      <h2 onClick={()=> router.push("/")}>MyApp</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/user"}>User</Link>
      <Link href={"/post"}>Post</Link>
      <Link href={"/recipe"}>Recipe</Link>
      <Link href={"/login"}>Login</Link>
      </nav>
    </header>
  )
}

export default React.memo(Header)