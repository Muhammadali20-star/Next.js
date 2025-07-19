import UserDetails from '@/components/user-detail/UserDetails';
import React from 'react';

const UserDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`, { cache: "force-cache" });
  const user: IUsers = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <UserDetails data={user} />
    </div>
  );
};

export default UserDetail;
