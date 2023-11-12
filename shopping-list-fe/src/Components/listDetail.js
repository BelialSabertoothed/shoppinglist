import React, { useState }from 'react';
import ListHeader from './listHeader';
import ItemList from './listItem';
import NavBar from './navBar';


function ListDetail() {
  const [title, setTitle] = useState('Shopping List');

  const handleUpdateTitle = (newTitle) => {
    setTitle(newTitle);
  };
    return (
      <div>
        <NavBar />
        <ListHeader title={title} onUpdateTitle={handleUpdateTitle} />
        <ItemList />
      </div>
    );
  }
  

export default ListDetail;