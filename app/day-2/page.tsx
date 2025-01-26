'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Bell, BellOff } from 'lucide-react'

export default function Page() {
  const [open, setOpen] = useState(false)
  const [silentring, setSilentRing] = useState(false)

  const textVariants = {
    init: { opacity: 0, y: 10 },
    anim: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <div className='flex justify-center'>
      <motion.div
        className='bg-black w-28 rounded-full px-1.5 py-1 flex items-center cursor-pointer'
        onClick={() => setOpen(!open)}
        animate={{ width: open ? 140 : 112 }}
      >
        <motion.div
          className='flex items-center justify-between w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icône animée */}
          <motion.div
            className={`flex items-center justify-center rounded-full`}
            initial={{ padding: '2px 0px 2px 0px', backgroundColor: 'transparent' }}
            animate={open ? { padding: silentring ? '2px 12px 2px 12px' : '2px 0px 2px 0px', backgroundColor: silentring ? 'rgb(239, 68, 68)' : 'transparent' } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={open ? { rotate: [-10, 10, -10, 0], opacity: 1 } : {}}
              whileHover={open ? { rotate: [-10, 10, -10, 0] } : {}}
              key={silentring ? 'silent-icon' : 'ring-icon'}
              transition={{ duration: 0.5 }}
              onClick={(e) => {
                e.stopPropagation()
                setSilentRing(!silentring)
              }}
            >
              {silentring ? (
                <BellOff color="white" fill="white" size={20} />
              ) : (
                <Bell color="white" fill="white" size={20} />
              )}
            </motion.span>
          </motion.div>


          {/* Texte animé */}
          <motion.p
            className={`${silentring ? "text-red-500" : "text-white"} font-medium text-sm`}
            variants={textVariants}
            initial="init"
            animate="anim"   
            exit="exit"  
            key={silentring ? 'silent-text' : 'ring-text'} 
            transition={{ duration: 0.3 }}  
          >
            {silentring ? 'Silent' : 'Ring'}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
