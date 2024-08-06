import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import OnboardingForm from '../components/OnboardingForm'

const page =  async() => {

  const user = await currentUser();
  const userName = user?.firstName ?? "";

  return (
    <div className="hero bg-[url('../img/kanban-bg.jpg')] bg-cover bg-center backdrop-blur-sm h-[102vh] relative w-full mt-[-75px] overflow-hidden">
      <OnboardingForm user={userName}/>
    </div>
  )
}

export default page