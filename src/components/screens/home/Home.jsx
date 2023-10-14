
import CarItem from "./CarItem/CarItem";
import { cars } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold">Car catalog</h1>
      <CreateCarForm />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Машин нет</p>
        )}
      </div>
    </div>
  );
}

export default Home;
