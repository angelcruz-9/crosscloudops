import React from 'react';
import { motion } from 'framer-motion';
import { PiArrowSquareUpRightFill } from 'react-icons/pi';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

const CardImage: React.FC<CardProps> = ({ imageSrc, title, description, linkUrl, linkText }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#141414] border-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <motion.img 
        className="w-full h-48 object-cover"
        src={`${process.env.PUBLIC_URL}${imageSrc}`}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      />
      <div className="px-6 py-4">
        <motion.div className="font-bold text-xl mb-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
        >
          {title}
        </motion.div>
        <motion.p className="text-base text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
        >
          {description}
        </motion.p>
      </div>
      <motion.div className="px-6 pt-4 pb-2 cursor-pointer flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.8 } }}
      >
        <a href={linkUrl} className="text-blue-500 hover:text-blue-800">
          {linkText}
        </a>
        <motion.div className='text-blue-500 hover:text-blue-800 mt-1 ml-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.8 } }}
        >
          <PiArrowSquareUpRightFill />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardImage;
