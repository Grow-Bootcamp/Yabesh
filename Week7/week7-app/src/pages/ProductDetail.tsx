import { Link, useParams } from 'react-router-dom'
import { products } from '../data';

const ProductDetail = () => {
  const { id } = useParams<{id: string}>();
  
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section>
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>

      <Link to="/products">Back to Products</Link>
    </section>
  );
}

export default ProductDetail;