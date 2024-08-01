import React from 'react'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
export default async function page() {
    const {getUser} = getKindeServerSession();
    const user =  await getUser();
    console.log(user)
  return (
    <>
    <div>{user?.given_name}</div>
    <div>{user?.family_name}</div>
    <div>{user?.email}</div>
    <img src={user?.picture} alt="" />

    </>

  )
}
