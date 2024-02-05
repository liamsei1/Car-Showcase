import { fuels, yearsOfProduction } from "@/constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDetailsProps{
    isOpen: boolean;
    closeModel: () => void;
    car: CarCardProps;
}

export interface FilterProps{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface CustomFilterProps {
    title: string;
    options: typeof fuels;
  }

export interface ShowMoreProps {
    isNext: boolean;
}