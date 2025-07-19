"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type UsersProps = {
  data: { users: IUsers[] }
}

const User: FC<UsersProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="container mx-auto mt-14">
      <h2 className="text-3xl font-semibold mb-8 text-center">Users</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
      {data?.users?.map((user: IUsers) => (
        <div key={user.id} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div className="p-5 flex flex-col items-center space-y-3">
            <Image onClick={()=> router.push(`/user/${user.id}`)} src={user.image} alt={user.firstName} width={120} height={120} className="rounded-full border-4 border-purple-500 shadow-md"/>
            <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
            <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full">{user.gender}</span>
            <p className="text-gray-400 text-sm">{user.email}</p>
            <p className="text-gray-400 text-sm">Age: <span className="text-gray-200">{user.age}</span></p>
            <p className="text-gray-400 text-sm">Company: <span className="text-gray-200">{user.company?.name}</span></p>
            <p className="text-gray-400 text-sm">Location: <span className="text-gray-200">{user.address?.city}, {user.address?.state}</span></p>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-1.5 rounded-full shadow hover:shadow-lg transition">View Profile</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default User
