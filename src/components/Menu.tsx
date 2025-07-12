import { useEffect, useState } from 'react';

const Menu: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-black/70 text-white flex items-center justify-between px-2 text-xs font-medium font-sans z-50 backdrop-blur select-none">
      <div className="flex items-center space-x-4">
        <span className="font-bold cursor-pointer transition-colors duration-200 active:text-gray-400">
          Lightzen Ltd.
        </span>
        <span className="font-bold">Terminal</span>
        <span>Shell</span>
      </div>

      <div className="flex items-center space-x-2">
        <span>
          {(() => {
            const [currentTime, setCurrentTime] = useState(new Date());

            useEffect(() => {
              const timer = setInterval(() => {
                setCurrentTime(new Date());
              }, 1000);

              return () => clearInterval(timer);
            }, []);

            return currentTime.toLocaleDateString('en-GB', {
              weekday: 'short',
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            });
          })()}
        </span>
      </div>
    </div>
  );
};

export default Menu;
