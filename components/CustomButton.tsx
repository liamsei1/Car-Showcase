"use client";

import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

export default function CustomButton({ title, containerStyle, handleClick, btnType } : CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}>
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}
