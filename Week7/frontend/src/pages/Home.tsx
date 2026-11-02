import { toast } from 'react-toastify';

function Home() {
  return(
    <section>
      <h1>Welcome to our product store</h1>
      <p>Learn React Router, modals, and toast notifications.</p>

      <button onClick={() => toast.success('Welcome to the store!')}>
        Show Success Toast
      </button>

      <button onClick={() => toast.error('This is an example error.')}>
        Show Error Toast
      </button>
    </section>
  );
}

export default Home;