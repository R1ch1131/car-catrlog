
import { useState } from "react";
import CarItem from "./CarItem/CarItem";
import { cars as carsData } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  const [cars, setCars] = useState(carsData)
  return ( 
    <div className="m-8">
      <h1 className="text-4xl font-bold">Car catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Car no</p>
        )}
      </div>
    </div>
  );
}

export default Home;
