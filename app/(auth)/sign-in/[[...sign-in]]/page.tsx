import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='dark:bg-slate-800 h-screen flex justify-center items-center'>
      <SignIn/>
    </div>
  )
}

export default page