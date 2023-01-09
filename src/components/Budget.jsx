import { useAppContext } from "../context/AppProvider"

const Budget = () => {

  const { budget, products } = useAppContext()

  const getBudget = () => {
    let total = 0
    if (products.length > 0) {
      total = products.reduce((acc, product) => {
        return acc + (product.price * product.quantity)
      }, 0)
    }
    return budget - total
  }

  return (
    <div className="alert alert-warning text-center">
      Budget:
        <span className="d-block">{getBudget()} €</span>
    </div>
  )
}

export default Budget