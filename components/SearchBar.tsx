"use client";

import React from 'react'
import { SearchManufacturer } from "@/components";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { dontScroll } from '@/utils';

const SearchButton = ({otherClasses}:{otherClasses : string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={'/magnifying-glass.svg'} alt='magnifying glass' width={40} height={40} className='object-contain'/>
  </button>
)

export default function SearchBar() {
    const [manufacturer, setManufacturer] = React.useState('');
    const [model, setModel] = React.useState('');
    const router = useRouter();
    const searchParams = new URLSearchParams(window.location.search);


    dontScroll(searchParams);  

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(manufacturer === '' && model === ''){
          return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {

      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`
      
      localStorage.setItem('persistentScroll', window.scrollY.toString())
      router.push(newPathName)
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className='searchbar__item'>
          <Image src='/model-icon.png' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model'/>
          <input type='text' name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input'/>
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}
