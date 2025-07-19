import UserDetails from '@/components/user-detail/UserDetails';
import React from 'react'

const UserDetail  = async ({params}: {params: {id: IUsers}}) => {
    const id = params.id

    const data = await fetch(`https://dummyjson.com/users/${id}`, { cache: "force-cache" });
    const user = await data.json();
  return (
    <div>
        <UserDetails data={user}/>
    </div>
  )
}

export default UserDetail