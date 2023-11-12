import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import NavBar from './navBar';
import CreateList from './createList';
import EditList from './editList';
import mockData from './mockData';
import { useNavigate } from 'react-router-dom';

const ListTiles = () => {
  const [listTiles, setListTiles] = useState(mockData);
  const [selectedListForEdit, setSelectedListForEdit] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [showArchived, setShowArchived] = useState(true);
  const navigate = useNavigate();


  const handleAddCreateList = (listName) => {
    if (listName.trim() !== '') {
      const newList = { id: Date.now(), name: listName, archived: false, items: [] }; 
      setListTiles([...listTiles, newList]);
    }
  };
  const handleEditList = (listId, updatedName) => {
    setListTiles((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, name: updatedName } : list
      )
    );
    handleCloseEditModal();
  };

  const handleDeleteList = (listId) => {
    setListTiles((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  const handleArchiveList = (listId) => {
    setListTiles((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, archived: !list.archived } : list
      )
    );
  };

  const handleCloseEditModal = () => {
    setSelectedListForEdit(null);
  };

  const handleEditListModal = (list) => {
    setSelectedListForEdit(list);
  };

  const handleShowDeleteConfirmation = (list) => {
    setDeleteConfirmation(list);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmation(null);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation) {
      handleDeleteList(deleteConfirmation.id);
      handleCloseDeleteConfirmation();
    }
  };

  const filteredLists = listTiles
    .filter((list) => (showArchived ? true : !list.archived))
    .sort((a, b) => (a.archived === b.archived ? 0 : a.archived ? 1 : -1));

  const toggleShowArchived = () => {
    setShowArchived(!showArchived);
  };


  const handleCardClick = (list) => {
    navigate(`/list-detail`);
  };

  return (
    <>
      <NavBar />
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5%', marginBottom: '3%', }}>
        <CreateList onAddCreateList={handleAddCreateList} />
        <Button onClick={toggleShowArchived} style={{
                border: 'none',
                marginLeft: '80%',
                background: '#D0BCFF',
                color: 'black',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',}}>
          {showArchived ? 'Hide Archived' : 'Show Archived'}
        </Button>
        </div>
        <Row xs={1} md={2} lg={3}>
           {filteredLists.map((list) => (
          <Col key={list.id}>
              <Card onClick={() => handleCardClick(list)} 
              className="mb-3 position-relative"
              style={{
                background: 'rgba(9, 173, 234, 0.31)',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',}}>
                <Card.Body>
                  <div style={{ display: 'flex', alignItems: 'center',}}>
                  <Card.Title>{list.name}</Card.Title>
                  <Button variant="primary" onClick={(e) => {
                      e.stopPropagation(); 
                      handleEditListModal(list);
                    }}
                  className="position-absolute top-0 end-0 m-2"
                  style={{
                    backgroundColor: '#ECE6F0',
                    border: 'none',
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    height:'40px',
                    width:'40px',
                  }} >
                  <AiOutlineEdit style={{ color: 'black'}} size={20}/>
                  </Button>
                  </div>
                  <p>Done {list.items.filter(item => item.completed).length}/{list.items.length}</p>
                  <div className="position-absolute bottom-0 end-0 m-2">
                  <Button variant="danger" 
                    onClick={(e) => {
                    e.stopPropagation(); handleShowDeleteConfirmation(list)}}
                    style={{
                    background: 'transparent',
                    border: 'none'
                  }}>
                  <AiOutlineDelete style={{ color: 'black' }} size={20}/>
                  </Button>
                  <Button
                  style={{
                    border: 'none',
                    background: list.archived ? '#D0BCFF' : '#D9D9D9',
                    color: 'black',
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation(); handleArchiveList(list.id)}}>
                  {list.archived ? 'Unarchive' : 'Archive'}
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {selectedListForEdit && (
          <EditList
            selectedList={selectedListForEdit}
            onEditList={handleEditList}
            onClose={handleCloseEditModal}
          />
        )}
        <Modal show={!!deleteConfirmation} onHide={handleCloseDeleteConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the list "{deleteConfirmation?.name}"?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteConfirmation}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ListTiles;

