import { useState } from 'react'
import { useAppContext } from '../context/AppProvider'

const Form = () => {

  const {dispatch} = useAppContext()

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const product = { name, quantity, price }
    console.log(product)
    setName('')
    setQuantity(0)
    setPrice(0)
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input 
          type="number" 
          className="form-control"
          value={quantity}
          onChange={(event) => setQuantity(event.target.valueAsNumber)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input 
          type="number" 
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.valueAsNumber)}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  )
}

export default Form