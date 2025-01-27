'use client'
import React, { useState } from 'react'
import { motion, Reorder } from 'motion/react'

export default function Page() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn Framer Motion', backColor: 'rgba(248, 200, 220, 1)', topColor : '#E195B5', textColor: '#B8698B', hour: '8 AM - 9 AM' },
    { id: 2, title: 'Client Presentation', backColor: 'rgba(181, 234, 215, 1)', topColor : '#71C2A5', textColor: '#4E8D78', hour: '9 AM - 10 AM' },
    { id: 3, title: 'Design Revisions', backColor: 'rgba(162, 210, 255, 1)', topColor : '#5A9FD9', textColor: '#326FA3', hour: '10 AM - 11 AM'  },
    { id: 4, title: 'Call Agence', backColor: 'rgba(255, 248, 181, 1)', topColor : '#E1C85A', textColor: '#B6953C', hour: '11 AM - 12 AM'   },
    { id: 5, title: 'Fix bugs', backColor: 'rgba(220, 198, 224, 1)', topColor : '#9B7AAE', textColor: '#6F5181', hour: '12 AM - 1 PM'  },
  ]);

  const shuffle = () => {
    setTasks([...tasks].sort(() => Math.random() - 0.5));
  }

  return (
    <div className='flex justify-center items-center space-x-12'>
      <button onClick={shuffle} className='py-2 px-4 bg-blue-500 text-white font-medium rounded-md mb-10 h-fit'>
        Shuffle
      </button>
    <Reorder.Group axis="y" values={tasks} onReorder={setTasks} className="flex flex-col space-y-4 w-fit">
      {tasks.map((task) => (
        <Reorder.Item 
          key={task.id} 
          value={task}
          layout // Anime le changement d'ordre
          className="rounded-md cursor-grab active:cursor-grabbing"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: task.backColor }}
            className='rounded-md'
          >
            <div style={{ backgroundColor: task.topColor }} className='p-2 border-b-2 border-dotted border-neutral-300 rounded-t-lg text-white text-sm'>
              <p>{task.hour}</p>
            </div>

            <div style={{ backgroundColor: task.backColor, color: task.textColor }} className='p-2 h-20 rounded-b-lg font-medium'>
              <p>{task.title}</p>
            </div>
          </motion.div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </div>
  )
}
