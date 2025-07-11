import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

const FlowingGradientBlur: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <div className="">
      <FlowingGradientBlur />

      <div className="absolute inset-0 flex items-center justify-center min-h-screen">
        <TerminalCard></TerminalCard>
      </div>
    </div>
  );
};

const asciiArt = `
██╗     ██╗ ██████╗ ██╗  ██╗████████╗███████╗███████╗███╗   ██╗
██║     ██║██╔════╝ ██║  ██║╚══██╔══╝╚══███╔╝██╔════╝████╗  ██║
██║     ██║██║  ███╗███████║   ██║     ███╔╝ █████╗  ██╔██╗ ██║
██║     ██║██║   ██║██╔══██║   ██║    ███╔╝  ██╔══╝  ██║╚██╗██║
███████╗██║╚██████╔╝██║  ██║   ██║   ███████╗███████╗██║ ╚████║
╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝`;

const TerminalCard: React.FC = () => {
  const [commandCompleted, setCommandCompleted] = useState(false);
  const [companyNameCompleted, setCompanyNameCompleted] = useState(false);
  const [descriptionCompleted, setDescriptionCompleted] = useState(false);

  return (
    <div className={`relative max-w-4xl mx-auto p-2`}>
      {/* Terminal window frame */}
      <div className="shadow-2xl m-3 bg-black/30 rounded-lg">
        {/* Terminal header */}
        <div className="flex items-center px-4 py-3 rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono p-2">
              root@lightzen.dev
            </span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-green-400 bg-black/30 rounded-b-lg">
          <div className="space-y-4">
            {/* First command */}
            <div>
              <span className="text-blue-400">root@lightzen:~$ </span>
              <ReactTyped
                strings={['cat company.txt']}
                typeSpeed={30}
                showCursor={false}
                className="text-white"
                onComplete={() => setCommandCompleted(true)}
              />
            </div>

            {/* Company info with delay */}
            {commandCompleted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-1"
              >
                {asciiArt.split('\n').map((line, index) => (
                  <pre className="max-w-6xl text-sm">
                    <ReactTyped
                      strings={[line]}
                      typeSpeed={10}
                      showCursor={false}
                      onComplete={() => {
                        if (index === asciiArt.split('\n').length - 1) {
                          setCompanyNameCompleted(true);
                        }
                      }}
                    />
                  </pre>
                ))}

                {companyNameCompleted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0, duration: 0.3 }}
                    className="text-blue-300"
                  >
                    <ReactTyped
                      strings={[
                        'Small but beautiful indie software development',
                      ]}
                      showCursor={false}
                      typeSpeed={10}
                      onComplete={() => setDescriptionCompleted(true)}
                    />
                  </motion.div>
                )}

                {descriptionCompleted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <ReactTyped
                      strings={[
                        'Crafting interesting apps with passion and precision',
                      ]}
                      typeSpeed={10}
                      showCursor={true}
                    />
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
