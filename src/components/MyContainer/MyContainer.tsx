import { ReactNode } from 'react';

interface TMyContainer {
  children: ReactNode;
  className?: string;
}

const MyContainer = ({ children, className }: TMyContainer) => {
  return (
    <div className={`max-w-7xl mx-auto lg:px-5 sm:px-6 px-5 ${className}`}>
      {children}
    </div>
  );
};

export default MyContainer;
