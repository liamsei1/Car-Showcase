import { CarCardProps, FilterProps } from "@/types";
import React from "react";

export async function fetchCars(filters: FilterProps){
    const headers = {
            'X-RapidAPI-Key': 'e20e7a5b17msh9ae905599f423f6p126c32jsnebaa583cf80d',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const {manufacturer,year,model,limit,fuel} = filters; 
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers });

    const result = await response.json();

    return result;
}

export function calculateCarRentCost(year: number, fuel_type: string) {
    const baseCost = 30; // Base cost per day

    // Some example conditions affecting the cost
    let additionalCost = 0;
    if (year < 2010) {
      additionalCost += 10;
    }
  
    if (fuel_type === 'Electric') {
      additionalCost += 20;
    }
    
    // Final calculation
    return baseCost + additionalCost;
  
}


export function dontScroll(searchParams: any){
  React.useEffect(() => {
    // Retrieve scrollY value from localStorage after routing
    const persistentScroll = localStorage.getItem('persistentScroll')
    if (persistentScroll === null) return

    // Restore the window's scroll position
    window.scrollTo({ top: Number(persistentScroll) })
   
    // Remove scrollY from localStorage after restoring the scroll position
    // This hook will run before and after routing happens so this check is
    // here to make we don't delete scrollY before routing
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem('persistentScroll')
    console.log("wtf");
  }, [searchParams])

}