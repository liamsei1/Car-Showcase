"use client";
import { CarCardProps } from '@/types';
import React from 'react'
import { CarDetails, CustomButton } from '.';
import { calculateCarRentCost } from '@/utils';
import Image from 'next/image';

interface CarProps {
    car : CarCardProps;
}

export default function CarCard({car} : CarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const price = calculateCarRentCost(car.year, car.fuel_type)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className="car-card__content-title">
                {car.make} {car.model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            {price}$
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={"/hero.png"} alt="car model" fill priority className='object-contain' />
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                    <p className='text-[14px]'>
                        {car.transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt="tire" />
                    <p className='text-[14px]'>
                        {car.drive.toLocaleUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt="gas" />
                    <p className='text-[14px]'>
                        {car.city_mpg} MPG
                    </p>
                </div>
            </div>
            
            <div className='car-card__btn-container'>
                <CustomButton 
                    title='View More'
                    containerStyle='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car}/>
    </div>
  )
}
