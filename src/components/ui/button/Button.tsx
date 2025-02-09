"use client"
import React from 'react'

interface ButtonProps {
    label : string;
    onClick : () => void;
    type : boolean;
}

function Button({label, onClick, type} : ButtonProps) {
  if(type) {
    return (
      <button onClick={onClick} className="bg-primary w-fit text-foreground px-[32px] py-[12px] rounded-[64px] capitalize">
        {label}
      </button>
    )
  }else {
    return (
      <button onClick={onClick} className="text-primary px-[32px] py-[12px] rounded-[64px] border-2 border-primary capitalize">
        {label}
      </button>
    )
  }
}

export default Button