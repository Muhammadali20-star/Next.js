"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type UserProps = {
  data: IUsers
}

const UserDetails: FC<UserProps> = ({ data }) => {
  const router = useRouter()
  return (
    <div className="max-w-sm mx-auto mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col items-center p-6 space-y-3">
        <Image src={data.image} alt={data.firstName} width={120} height={120} className="rounded-full border-4 border-purple-500 shadow-md"/>
        <h2 className="text-xl font-bold">{data.firstName} {data.lastName}</h2>
        <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full">{data.gender}</span>

        <div className="text-gray-400 text-sm space-y-1 text-center">
          <p>{data.email}</p>
          <p>Age: <span className="text-gray-200">{data.age}</span></p>
          <p>Company: <span className="text-gray-200">{data.company?.name}</span></p>
          <p>Location: <span className="text-gray-200">{data.address?.city}, {data.address?.state}</span></p>
        </div>

        <button onClick={()=> router.push("/user")} className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"> View Profile</button>
      </div>
    </div>
  )
}

export default UserDetails
