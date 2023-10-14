import { useState } from "react"

const CreateCarForm = () => {
  const[name, setName] = useState("")

  const createCar = () => {}
    console.log(name)


return <form className="m-3">
    <input className="p-5" placeholder="Name" onChange={e => setName
    (e.target.value)} value={name}/>
    <input className="p-5" placeholder="Price"/>
    <input className="p-5" placeholder="Image"/>

    <button>Create</button>
  </form>
}

export default CreateCarForm