'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

import { Plus } from 'lucide-react';

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <div className='border flex justify-center'>
      <motion.div className='bg-black flex items-center justify-center w-fit p-1 space-x-1 rounded-full cursor-pointer'
        onClick={() => setOpen(!open)}
        animate={{ width: open ? 200 : 'auto' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}>

        <Image src="/pfp.png" width={24} height={24} alt="pfp" />

        <motion.span
          initial={{ rotate: 0, opacity: 1 }}
          animate={{ opacity: open ? 0 : 1 }}
          whileHover={{ rotate: 180}}
          transition={{ duration: 0.3 }}
          className='bg-green-500 rounded-full w-6 h-6 flex items-center justify-center'
          >
          <Plus color='white'size={16}/>
        </motion.span>
      </motion.div>
    </div>
  )
}
