"use client"
import React, { FC } from 'react'
import Image from 'next/image'

type UsersProps = {
  data: { users: IUsers[];}
}
const User: FC<UsersProps> = ({ data}) => {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-4 mt-14'>
      {
        data?.users?.map((user: IUsers) => (
          <div key={user.id} className="p-4 bg-white shadow rounded text-center">
            <Image  src={user.image}  alt={user.firstName}  width={200}  height={200}/>
            <h2 className="font-semibold">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default User
