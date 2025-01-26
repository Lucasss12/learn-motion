'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Fonction pour réorganiser les éléments de la liste
  const shuffleItems = () => {
    setItems((prevItems) => {
      const shuffled = [...prevItems];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <button
          className="bg-blue-500 text-white p-2 rounded mb-4"
          onClick={shuffleItems}
        >
          Shuffle Items
        </button>

        <div className="flex flex-col items-center space-y-4">
          {items.map((item) => (
            <motion.div
              key={item}
               // Cette propriété anime la réorganisation des éléments
              className="bg-sky-500 text-white flex justify-center items-center"
              style={{
                width: '200px',
                height: '100px',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Animation de réorganisation
            >
              Item {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
