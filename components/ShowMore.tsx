"use client";

import { ShowMoreProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { dontScroll } from '@/utils';

export default function ShowMore({ isNext } : ShowMoreProps) {
    const router = useRouter();
    const [clicks, setClicks] = React.useState(1);
    let searchParams;
    dontScroll(searchParams);

    const handleNavigation = () => {
        setClicks((prevClicks) => prevClicks+1);
        const newLimit = (clicks + 1) * 10;
        searchParams = new URLSearchParams(window.location.search);

        searchParams.set("limit", String(newLimit))
    
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        
        localStorage.setItem('persistentScroll', window.scrollY.toString())      
        router.push(newPathName)
    
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton 
            title='Show More'
            btnType='button'
            containerStyle='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
        />
      )}
    </div>
  )
}
