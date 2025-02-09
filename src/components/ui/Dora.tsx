import React from 'react';

interface DoraProps {
  left?: number;
  top: number;
  right?: number;
  className?: string;
}

function Dora({ left, top, right, className }: DoraProps) {
  return (
    <div
      style={{
        top: `${top}px`,
        ...(left !== undefined ? { left: `${left}px` } : {}),
        ...(right !== undefined ? { right: `${right}px` } : {}),
      }}
      className={`w-[250px] h-[250px] hidden md:block md:w-[492px] md:h-[492px] bg-primary rounded-full absolute blur-[800px] ${className}`}
    ></div>
  );
}

export default Dora;
