import React from 'react'
import { SignIn, SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='dark:bg-slate-800 h-screen flex justify-center items-center'>
      <SignUp/>
    </div>
  )
}

export default page