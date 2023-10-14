function CarItem({car}) {
  return (
    <div key={car.id} className="container rounded-xl border-2 border-black mt-8 w-1/3" >
          <div className="w-full h-full ">
              <img className="w-full h-full rounded-xl" src={(car.image)} alt="не работает" />
          </div>
          <div>
          <h2 className="pl-3 font-bold text-2xl">{car.name}</h2>
          <p className="pl-3">{new Intl.NumberFormat('ru-RU', {
            style: "currency",
            currency: "USD",
          }).format(car.price)}</p>
          <button className="pl-3">See more</button>
          </div>
        
          </div>
  )
}

export default CarItem