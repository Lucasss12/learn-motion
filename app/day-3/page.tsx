'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { Check, ChefHat, X } from 'lucide-react'

export default function Page() {
  const [showToast, setShowToast] = useState(false)
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([])

  const getToastVariants = (index: number) => ({
    hidden: { opacity: 0, y: 150, scale: 1 },
    visible: {
      opacity: 1,
      y: -index * 15,  
      scale: 1 - index * 0.07, 
      zIndex: toasts.length - index, 
    },
    exit: { opacity: 0, x: 150 },
  })

  const addToast = (index: number) => {
    const newToast = {
      id: index,
      message: 'This is a success message'
    }
    setToasts([newToast, ...toasts]) 
    setShowToast(true)
  }  

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  return (
    <div className='flex justify-center border'>
      <motion.button 
        onClick={() => addToast(toasts.length)}
        className='flex items-center bg-neutral-800 text-white px-4 py-2 rounded-lg'
        whileTap={{ scale: 0.9 }}
      >
        Make a Toast
        <ChefHat size={16} className='ml-2' />
      </motion.button>

      <AnimatePresence>
        <div className='flex flex-col items-end absolute bottom-4 right-4'>
          {toasts.map((toast, index) => (
            <motion.div
              key={toast.id}
              className='fixed bottom-4 right-4 rounded-lg border bg-neutral-800 flex items-center justify-between p-3'
              variants={getToastVariants(index)}
              initial='hidden'
              layout
              animate={showToast ? 'visible' : 'hidden'}
              exit='exit'
              transition={{ duration: 0.25 }}
            >

              <div className='flex items-center space-x-3 mr-16'>
                <span className='bg-green-400 rounded-full p-1'>
                  <Check size={12} />
                </span>

                <p className='text-white font-semibold text-sm'>
                  {toast.message} {toast.id}
                </p>
              </div>

              <button className='py-1 pl-3 border-l border-neutral-200' onClick={() => removeToast(toast.id)}>
                <X size={16} className='text-white hover:text-red-500' />
              </button>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}
