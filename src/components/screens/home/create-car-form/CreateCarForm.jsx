import { useState } from "react"

const clearData = {
  price: '',
  name: '',
  image: '',
}


const CreateCarForm = ({setCars}) => {
  const[data, setData] = useState({
    
  })
 
  const createCar = (e) => {
    e.preventDefault()
    

    setCars(prev => [...prev, {id: prev.length + 1, ...data}])

    setData(clearData)
  }
  



return <form className="m-3">
    <input className="p-3" placeholder="Name" onChange={e => setData(prev => ({
      ...prev, name: e.target.value
    }))}
      value={data.name}/>

    <input className="p-3" placeholder="Price" onChange={e => setData(prev => ({
      ...prev, price: e.target.value
    }))}
      value={data.price}/>

    <input className="p-3" placeholder="Image" onChange={e => setData(prev => ({
      ...prev, image: e.target.value
    }))}
      value={data.image}/>

    <button onClick={e => createCar(e)}>Create</button>
  </form>
}

export default CreateCarForm