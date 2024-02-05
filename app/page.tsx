import { Hero , SearchBar , CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  const isDataEmpty = !allCars ||allCars.length<1 || !Array.isArray(allCars)
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-w-fit" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car,index) => <CarCard car={car} key={index}/>)}
              </div>
              <ShowMore 
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">No Results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
      </div>
    </main>
  );
}
