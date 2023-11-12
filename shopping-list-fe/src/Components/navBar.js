import React, { useState } from 'react';
import { Navbar, Nav, Modal, Form } from 'react-bootstrap';
import { BiUser } from 'react-icons/bi'; // Import ikony s panáčkem
import './navBar.css';

const NavbarWithLogin = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand className="Nav-name">uuList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> 
            {loggedIn ? (
              <>
                <Nav.Item>
                  <button className="btn" onClick={handleLogout}>
                    Log out
                  </button>
                </Nav.Item>
                <Nav.Item>
                  <BiUser size={24} />
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>{username}</Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <button className="btn" onClick={() => setShowLoginModal(true)}>
                  <BiUser size={24} /> 
                </button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <button className="btn" onClick={handleLogin}>
            Log in
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarWithLogin;
