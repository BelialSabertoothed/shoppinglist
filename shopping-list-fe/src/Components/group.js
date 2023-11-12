import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';
import { AiOutlineTeam, AiOutlineDelete } from 'react-icons/ai';

function UserManagementComponent() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [usersData, setUsersData] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ]);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(true);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
  };

  const handleRemoveUser = () => {
    if (userToDelete) {
      const updatedUsersData = usersData.filter((user) => user.id !== userToDelete.id);
      setUsersData(updatedUsersData);
      setUserToDelete(null);
      handleCloseDeleteConfirmationModal();
    }
  };

  const handleDeleteUserConfirmation = (user) => {
    setUserToDelete(user);
    handleOpenDeleteConfirmationModal();
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleOpenModal}
        style={{
          backgroundColor: '#ECE6F0',
          border: 'none',
          boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          marginRight: '90px',
          marginTop:'40px',
          height:'40px',
          width:'40px',
          alignItems: 'center'
        }}
      >
        <AiOutlineTeam style={{ color: 'black' }} size={20} />
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {usersData.map((user) => (
              <ListGroup.Item key={user.id}>
                {user.name}
                <AiOutlineDelete
                  style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                  onClick={() => handleDeleteUserConfirmation(user)}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteConfirmationModal} onHide={handleCloseDeleteConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove "{userToDelete ? userToDelete.name : ''}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmationModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemoveUser}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserManagementComponent;
