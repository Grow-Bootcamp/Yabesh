import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Modal from '../components/Modal';
import { products as startingProducts } from '../data';
import type { Product } from '../data'

import { addToCart } from '../store/cartSlice';
import { useAppDispatch } from '../store/hooks';

function Products() {
  const [items, setItems] = useState<Product[]>(startingProducts);
  const [toDelete, setToDelete] = useState<Product | null>(null);

  const dispatch = useAppDispatch();

  function handleAddToCart (product: Product) {
    dispatch (
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
      })
    );

    toast.success(`${product.name} added to cart!`);
  }

  function confirmDelete() {
    if (toDelete === null) return;

    setItems(
      (currentItems) => currentItems.filter(
        (product) => product.id !== toDelete.id
      )
    );

    toast.success(`${toDelete.name} deleted successfully!`);
    setToDelete(null);
  }

  return(
    <section>
      <h1>Our Products</h1>

      <ul>
        {items.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
            {' - $'}
            {product.price}
            {' '}

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>

            <button onClick={() => setToDelete(product)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={toDelete !== null}
        onClose={() => setToDelete(null)}
        title="Delete product?"
      >
        <p>Are you sure want to delete {toDelete?.name}</p>

        <button onClick={confirmDelete}>
          Yes, Delete
        </button>

        <button onClick={() => setToDelete(null)}>
          Cancel
        </button>
      </Modal>
    </section>
  );
}

export default Products;