import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6), rgba(245, 158, 11, 0.6))',
          backgroundSize: '300% 300%',
          filter: 'blur(60px)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.5), transparent)',
          filter: 'blur(40px)',
          top: '20%',
          left: '15%',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.7), rgba(16, 185, 129, 0.5), transparent)',
          filter: 'blur(50px)',
          top: '60%',
          right: '20%',
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 90, -70, 0],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 18,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 3,
        }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 158, 11, 0.6), rgba(239, 68, 68, 0.3), transparent)',
          filter: 'blur(45px)',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 5,
        }}
      />
    </div>
  );
};

export default Background;
