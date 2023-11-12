import React, { useState } from 'react';
import { Card, Form, Modal, Button } from 'react-bootstrap';
import { AiOutlineShareAlt, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './listHeader.css';
import Group from './group';

const ListHeader = () => {
  const [title, setTitle] = useState('Shopping List');
  const [isEditing, setIsEditing] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);

  const handleEditTitleClick = () => {
    setIsEditing(true);
    setIsMenuOpen(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelEditClick = () => {
    setIsEditing(false);
    setIsMenuOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleShowShareModal = () => {
    setShowShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const handleShare = () => {
    handleCloseShareModal();
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };
  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };


  return (
    <div style={{ display: 'flex' }}>
    <Card className="rounded" style={{ backgroundColor: 'rgba(9, 173, 234, 0.31)', margin: '30px', marginRight: '30px', border: 'none', flex: '4'}}>
      <Card.Body>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  {isEditing ? (
    <Form.Control
      type="text"
      value={title}
      onChange={handleTitleChange}
      onKeyUp={handleEnterPress}
    />
  ) : ( 
    title 
  )}
  <div style={{ display: 'flex', alignItems: 'center' }} >
    <AiOutlineShareAlt
      size={24}
      style={{ cursor: 'pointer', marginRight: '20px' }}
      onClick={handleShowShareModal}
    />
    {isEditing ? (
      <AiOutlineClose
        size={24}
        style={{ marginRight: '10px', cursor: 'pointer' }}
        onClick={handleCancelEditClick}
      />
    ) : (
      <div className="dropdown" onClick={toggleDropdown}>
        <button className="dropbtn" onClick={handleMenuClick}>
          <AiOutlineMenu size={24} style={{ cursor: 'pointer' }} />
        </button>
        {isMenuOpen && (
          <div className={`dropdown-content ${isDropdownActive ? 'active' : ''}`}>
            <p onClick={handleEditTitleClick}>Edit</p>
            <p>Archive</p>
          </div>
        )}
      </div>
    )}
              <div>
          </div>
  </div>

   </div>
      </Card.Body>
      <Modal show={showShareModal} onHide={handleCloseShareModal}>
        <Modal.Header closeButton>
          <Modal.Title>Share List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShareModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShare}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    <Group/>
     </div>
  );
};

export default ListHeader;
