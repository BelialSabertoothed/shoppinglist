import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateList = ({ onAddCreateList }) => {
  const [showModal, setShowModal] = useState(false);
  const [ListName, setListName] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setListName('');
  };

  const handleShoppingListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleCreateShoppingList = () => {
    if (ListName.trim() !== '') {
      onAddCreateList(ListName);
      handleCloseModal();
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShowModal}
        style={{
          background: 'transparent',
          border: 'none',
        }}
      >
        <AiOutlinePlus style={{ color: 'black' }} size={30} />
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="List Name"
              value={ListName}
              onChange={handleShoppingListNameChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateShoppingList}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateList;
