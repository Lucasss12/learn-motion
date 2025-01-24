'use client'
import { useState } from "react";
import { motion } from "motion/react";

import { AudioLines, Plus, Settings } from "lucide-react";

export default function ExpandableImage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      {/* Div avec fond noir qui s'ajuste dynamiquement avec le padding */}
      <motion.div
        className={`bg-black rounded-full flex items-center ${open ? 'space-x-8' : 'space-x-2'} cursor-pointer`}
        onClick={() => setOpen(!open)}
        initial={{ padding: 4 }}
        animate={{ 
          padding: open ? 8 : 4, 
          width: "auto",
          height: "auto", 
        }} 
        transition={{ duration: 0.2 }}>
          
        <div className="flex items-center space-x-2">
          {/* Image animée qui grandit au clic */}
          <motion.span>
            <motion.img
                src="/pfp.png"
                alt="pfp"
                initial={{ width: 24, height: 24 }} 
                animate={{ width: open ? 36 : 24, height: open ? 36 : 24 }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0.5, originY: 0.5 }} 
                layout
            />
          </motion.span>

          {open && (
            <motion.div 
              className="flex flex-col text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300">Hello, I&apos;m</p>
              <p className="text-white font-semibold">Lucas</p>
            </motion.div>
          )}
        </div>

        {/* Icône "+" animée */}
        {!open ? (
          <motion.span
            className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center"
            animate={{ rotate: 180 }}
            whileHover={{ rotate: 720 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.8 }}>
            <Plus color="white" size={20} />
          </motion.span>
        ) : (
          <motion.div className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <span className="h-9 w-9 bg-orange-500 rounded-full flex items-center justify-center">
              <AudioLines color="white" size={20} />
            </span>


            <span className="h-9 w-9 bg-blue-500 rounded-full flex items-center justify-center">
              <Settings color="white" size={20} />
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
