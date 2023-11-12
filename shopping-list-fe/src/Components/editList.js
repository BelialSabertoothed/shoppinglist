import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditList = ({ selectedList, onEditList, onClose }) => {
    const [listName, setListName] = useState(selectedList.name);
  
    const handleListNameChange = (event) => {
      setListName(event.target.value);
    };
  
    const handleEditList = () => {
      if (listName.trim() !== '') {
        onEditList(selectedList.id, listName);
        onClose();
      }
    };
  
    return (
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="List name"
              value={listName}
              onChange={handleListNameChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditList}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default EditList;
