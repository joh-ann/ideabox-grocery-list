import './Form.css';
import { useState } from 'react';

function Form({ addToList }) {
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");

  function addItemToList(event) {
    event.preventDefault()
    
    const newItem = {
      id: Date.now(),
      ingredient,
      amount
    }
    addToList(newItem)
    clearInput()
  }
  
  function clearInput() {
    setIngredient("");
    setAmount("");
  }

  return (
    <form>
      <input 
      type='text'
      placeholder='ingredient'
      name='ingredient'
      value={ingredient}
      onChange={event => setIngredient(event.target.value)}
      />

      <input
      type='text'
      placeholder='0'
      name='amount'
      value={amount}
      onChange={event => setAmount(event.target.value)}
      className='amount-input'
      />

      <button className='add-button' onClick={event => addItemToList(event)}>Add</button>
    </form>
  )
}

export default Form;