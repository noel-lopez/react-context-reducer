import { useAppContext } from "../context/AppProvider";

const List = () => {

  const { products } = useAppContext();

  let list = <h5>There is no product yet</h5>
  if (products.length > 0) {
    list = (
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            <span className="badge bg-secondary rounded-pill me-2">{product.quantity}</span>
            {" "} {product.name} - {product.price} €
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <h3>Products list</h3>
      {list}
    </>
  )
}

export default List;