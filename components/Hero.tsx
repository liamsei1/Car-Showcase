"use client";

import React from 'react'
import Image from 'next/image';
import { CustomButton } from "@/components";

export default function Hero() {
  function HandleScroll(){

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36'>
            <h1 className='hero__title'>
                Find, book, or rent a car - quickly and easily!
            </h1>
            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortless boocking process.
            </p>
            <CustomButton 
                title="Explore Cars"
                containerStyle="bg-primary-blue text-white rounded-full mt-10"
                handleClick={HandleScroll}
                />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={'/hero.png'} alt='hero' fill className='object-contain'/>
            </div>
                <div className='hero__image-overlay' />
        </div>
    </div>
  )
}
