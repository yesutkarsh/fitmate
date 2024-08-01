import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
export default function page() {
  return (
    <>

    <LoginLink>Sign in With Kinde</LoginLink> <br/>
<RegisterLink>Sign up With Kinde</RegisterLink>
<LoginLink>Logout</LoginLink>

    </>
  )
}
