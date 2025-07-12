import { motion } from 'framer-motion';
import { useState } from 'react';
import { ReactTyped } from 'react-typed';

const asciiArt = `
██╗     ██╗ ██████╗ ██╗  ██╗████████╗███████╗███████╗███╗   ██╗
██║     ██║██╔════╝ ██║  ██║╚══██╔══╝╚══███╔╝██╔════╝████╗  ██║
██║     ██║██║  ███╗███████║   ██║     ███╔╝ █████╗  ██╔██╗ ██║
██║     ██║██║   ██║██╔══██║   ██║    ███╔╝  ██╔══╝  ██║╚██╗██║
███████╗██║╚██████╔╝██║  ██║   ██║   ███████╗███████╗██║ ╚████║
╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═══╝`;

const Terminal: React.FC = () => {
  const [commandCompleted, setCommandCompleted] = useState(false);
  const [companyNameCompleted, setCompanyNameCompleted] = useState(false);
  const [descriptionCompleted, setDescriptionCompleted] = useState(false);

  return (
    <div className="relative w-full max-w-[75ch] p-2 font-mono select-none">
      {/* Terminal window frame */}
      <div className="shadow-black shadow-2xl m-3 bg-black/30 rounded-lg backdrop-blur-[20px]">
        {/* Terminal header */}
        <div className="flex items-center px-4 py-3 rounded-t-lg shadow-2xl">
          <div className="flex space-x-2 ">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-white text-sm p-2">root@lightzen.dev</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 text-green-400 bg-black/30 rounded-b-lg">
          <div className="space-y-4">
            {/* First command */}
            <div>
              <span className="text-blue-400">root@lightzen.dev:~$ </span>
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
                className="space-y-0"
              >
                {asciiArt.split('\n').map((line, index) => (
                  <pre className="text-[0.3rem] sm:text-xs md:text-sm lg:text-base">
                    <ReactTyped
                      key={index}
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
                    className="text-purple-300"
                  >
                    <ReactTyped
                      strings={[
                        'Small but beautiful indie software development',
                      ]}
                      className="select-text"
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
                    className="text-blue-300"
                  >
                    <ReactTyped
                      className="select-text"
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

export default Terminal;
