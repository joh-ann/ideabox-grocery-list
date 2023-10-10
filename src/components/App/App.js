import './App.css';
import Form from '../Form/Form';
import List from '../List/List';
import { useState, useEffect } from 'react';

function App() {
  // const sampleList = [
  //   { id: 1, ingredient: 'apple', amount: 2 },
  //   { id: 2, ingredient: 'banana', amount: 6}
  // ]
  const [currentList, updateList] = useState([])

  function getItems() {
    fetch('http://localhost:3001/items')
    .then(response => response.json())
    .then(data => updateList([...currentList, ...data]))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getItems();
  }, [])

  function addItem(newItem) {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // id: newItem.id,
        name: newItem.name,
        amount: newItem.amount
      })
    })
    .then(response => response.json())
    .then(data => updateList([...currentList, data]))
    .catch(error => console.log(error.message))
  }

  function deleteItem(id) {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      const filteredList = data.filter(item => item.id !== id)
      updateList(filteredList)
    })
  }

  return (
    <main className='grocery-list'>
      <h1>Grocery List</h1>
      <Form addItem={addItem}/>
      {!currentList.length && <h2>List is empty</h2>}
      <List currentList={currentList} deleteItem={deleteItem}/>
    </main>
  )
}

export default App;