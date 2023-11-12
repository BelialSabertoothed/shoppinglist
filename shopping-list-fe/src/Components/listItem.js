import React, { useState, useEffect, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

const initialItems = ["Potato", "Vodka", "Fries"];

function ItemList() {
  const [items, setItems] = useState((initialItems));
  const [newItemText, setNewItemText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [showOnlyUnchecked, setShowOnlyUnchecked] = useState(false); 

  

  const addItem = useCallback(() => {
    if (newItemText) {
      setItems([...items, newItemText]);
      setCheckedItems([...checkedItems, false]);
      setNewItemText('');
      setShowInput(false);
    }
  }, [items, newItemText, checkedItems]);

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems.splice(index, 1);
    setCheckedItems(updatedCheckedItems);
  };

  const startEdit = (index) => {
    setEditMode(index);
    setEditedText(items[index]);
  };

  const saveEdit = useCallback((index) => {
    const updatedItems = [...items];
    updatedItems[index] = editedText;
    setItems(updatedItems);
    setEditMode(null);
    setEditedText('');
  }, [items, editedText]);

  const toggleCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !checkedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleEnterKey = useCallback((event) => {
    if (event.key === 'Enter') {
      if (showInput) {
        addItem();
      } else if (editMode !== null) {
        saveEdit(editMode);
      }
    }
  }, [showInput, editMode, addItem, saveEdit]);

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKey);
    return () => {
      document.removeEventListener('keydown', handleEnterKey);
    };
  }, [handleEnterKey]);

  return (
    <div>
    <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
      {showInput ? (
        <>
          <Form.Control
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            style={{ marginLeft: '30px', marginRight: '30px' }}
          />
          <Button className="mr-2" onClick={addItem} style={{ marginRight: '15px' }}>
            Add
          </Button>
          <Button onClick={() => setShowInput(false)} style={{ marginRight: '30px' }}>
            Cancel
          </Button>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={() => setShowInput(true)} style={{ 
            background: 'transparent', 
            border: 'none',
            marginLeft: '30px' 
        }}>
            <AiOutlinePlus style={{ color: 'black' }}size={20} />
          </Button>
          <Button onClick={() => setShowOnlyUnchecked(!showOnlyUnchecked)} style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ECE6F0',
            border: 'none',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            marginRight: '90px',
            color: 'black'
          }}>
            {showOnlyUnchecked ? 'Show all' : 'Show unchecked'}
          </Button>
        </div>
      )}
    </div>
      
      {items.map((item, index) => {
        if (showOnlyUnchecked && checkedItems[index]) {
          return null;
        }
        return (
        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Card
            className="rounded"
            style={{
              marginLeft: '30px',
              marginRight: '30px',
              marginTop: '15px',
              backgroundColor: checkedItems[index] ? '#D9D9D9' : 'rgba(223, 213, 236, 0.59)',
              flex: '1',
              border: 'none',
              boxShadow: checkedItems[index] ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={checkedItems[index] || false}
                  onChange={() => toggleCheck(index)}
                  style={{ marginRight: '20px' }}
                />
                {editMode !== index ? (
                  <span style={{ marginLeft: '10px' }}>{item}</span>
                ) : (
                  <Form.Control
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit(index)}
                  />
                )}
              </div>
            </Card.Body>
          </Card>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {editMode === index ? (
              <Button onClick={() => saveEdit(index)} style={{
                backgroundColor: '#ECE6F0',
                border: 'none',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                marginRight: '90px',
                marginTop: '15px',
                height:'40px',
                width:'40px',
              }}>
                <AiOutlineCheck style={{ color: 'black' }} size={20}/>
              </Button>
            ) : (
                <>
                <Button
                  onClick={() => startEdit(index)}
                  style={{
                    backgroundColor: '#ECE6F0',
                    border: 'none',
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    marginRight: '15px',
                    marginTop: '15px',
                    height:'40px',
                    width:'40px',
                  }}
                >
                  <AiOutlineEdit style={{ color: 'black' }} size={20}/>
                </Button>
                <Button
                  onClick={() => deleteItem(index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    marginLeft: 'auto',
                    marginRight: '30px',
                    marginTop: '15px',
                  }}
                >
                  <AiOutlineDelete style={{ color: 'black' }} size={20}/>
                </Button>
              </>
              
              )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  

export default ItemList;

