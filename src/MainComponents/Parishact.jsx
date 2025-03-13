import React from 'react';
import { motion } from 'framer-motion';

function Parishact() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      className='bg-blue-800 min-h-[65vh] p-4 flex flex-col items-center'
    >
      <motion.div 
        variants={fadeUp}
        className='text-white font-semibold text-2xl md:text-3xl font-serif text-center mb-4'
      >
        Parish Activities
      </motion.div>

      <div className='grid gap-4 w-full max-w-6xl'>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'
        >
          {activities1.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'
        >
          {activities2.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </motion.div>
      </div>

      <motion.div 
        variants={fadeUp}
        className='text-white text-center mt-6'
      >
        Not yet a Parishioner?
        <div className='mt-2'>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gray-50 font-medium rounded-full text-black text-sm sm:text-base py-2 px-4 shadow-lg'
          >
            Become a Parishioner - Register
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ActivityCard = ({ title, details, time }) => {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className='bg-gray-50 p-4 rounded-2xl text-center shadow-md'
    >
      <div id="parishactivities" className='text-black font-medium text-lg'>{title}</div>
      {details && <div className='text-gray-700 text-sm'>{details}</div>}
      {time && <div className='text-gray-600 text-xs'>{time}</div>}
    </motion.div>
  );
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Activity data
const activities1 = [
  { title: 'Station of the Cross', details: 'During Lent', time: 'Every Wed & Fri - 5:30pm' },
  { title: 'Infant Baptism', details: '', time: '2nd Saturday - 9:00am' },
  { title: 'Pre-Baptismal Class', details: 'For Infants', time: '1st Saturday - 8:00am' },
  { title: 'Sacrament of Matrimony', details: 'Inform church 6 months ahead', time: 'Pre-marital class: Sunday - 1pm' },
  { title: 'Catechism Classes', details: 'Sundays - 3:00pm', time: 'Adult catechism by arrangement' }
];

const activities2 = [
  { title: 'Confession', details: '', time: 'Saturday after morning mass' },
  { title: 'Communion of the Sick', details: 'Contact parish office / priest', time: '' },
  { title: 'Parish Office Days', details: 'Mon, Tue, Wed, Fri (10am-2pm)', time: 'Priest-in-charge: Tue & Fri (10am-2pm)' },
  { title: 'Rosary Procession', details: '', time: '1st Saturday after 6:30am mass' },
  { title: 'Funeral/Requiem Mass', details: '', time: 'Contact parish office/priest' }
];

export default Parishact;