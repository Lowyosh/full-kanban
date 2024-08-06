"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { SyncLoader } from 'react-spinners';
import toast from 'react-hot-toast';


const variants = {
  hidden: { opacity: 0},
  visible: { opacity: 1},
  exit: { opacity: 0},
}
const OnboardingForm = ({user}: {user: string | null | undefined}) => {

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // checking if theres a board id, if true => router pushes /mykanban

  const stepOneSubmit = () => {
    setStep(2);
  }

  const stepTwoSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.replace("/mykanban");
      toast.success(`Now you a have a brand new board ${user}`);
      setLoading(false);
    }, 4000);
  }

  const goBack = () => {
    setStep(1);
  }

  return (
    <motion.div
    initial = "hidden"
    animate = "visible"
    exit = "exit"
    variants = {variants}
    transition={{duration: 0.5}}
    className='flex flex-col h-full items-center justify-center pt-[80px] w-[90%] mx-auto max-w-[1440px] text-white'>
      {step === 1 && (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 0}}
        transition={{duration: 0.5}}
        className='w-full text-center'
        >
          <h6 className='mb-10 text-4xl font-bold'>Welcome {user} 👋🏾 Let's give your board a name</h6>
          <form className='flex flex-col gap-10 items-center' onSubmit={stepOneSubmit}>
            <input type="text" />
          </form>
        </motion.div>
      )}
    </motion.div>
  )
}

export default OnboardingForm