import './Item.css';

const Item = ({ ingredient, amount, id, deleteItem }) => {
  return (
    <div className='item'>
        <input type='checkbox'/>({amount}) {ingredient}
          <button className='delete-btn' onClick={() => deleteItem(id)}>x</button>
    </div>
  )
}

export default Item;