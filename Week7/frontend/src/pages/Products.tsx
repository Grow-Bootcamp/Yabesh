import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Modal from '../components/Modal';
import { products as startingProducts } from '../data';
import type { Product } from '../data'

function Products() {
  const [items, setItems] = useState<Product[]>(startingProducts);
  const [toDelete, setToDelete] = useState<Product | null>(null);

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