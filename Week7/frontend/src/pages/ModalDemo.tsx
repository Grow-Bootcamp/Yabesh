import { useState } from "react";
import { toast } from "react-toastify";

import Modal from "../components/Modal";

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  function confirmAction() {
    setIsOpen(false);
    toast.success('Action confirmed successfully');
  }

  return (
    <section>
      <h1>Modal Practice</h1>
      <p>Open the modal and try closing it in different ways.</p>

      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
      >
        <p>Are you sure want to continue?</p>

        <button onClick={confirmAction}>
          Yes, Continue
        </button>

        <button onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </section>
  );
}

export default ModalDemo;