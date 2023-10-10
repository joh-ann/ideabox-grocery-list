import './App.css';
import Form from '../Form/Form';
import List from '../List/List';
import { useState } from 'react';

function App() {
  const sampleList = [
    { id: 1, ingredient: 'apple', amount: 2 },
    { id: 2, ingredient: 'banana', amount: 6}
  ]
  const [currentList, updateList] = useState(sampleList)

  function addItem(newItem) {
    updateList([...currentList, newItem])
  }

  function deleteItem(id) {
    const filteredList = currentList.filter(item => item.id !== id)
    updateList(filteredList)
  }

  return (
    <main className='grocery-list'>
      <h1>Grocery List</h1>
      <Form addToList={addItem}/>
      {!currentList.length && <h2>List is empty</h2>}
      <List list={currentList} deleteMe={deleteItem}/>
    </main>
  )
}

export default App;