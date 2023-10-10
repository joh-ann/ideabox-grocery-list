import './List.css';
import Item from '../Item/Item';

function List({ currentList, deleteItem }) {
  const groceryList = currentList.map(item => {
    return (
      <Item 
      ingredient={item.name}
      amount={item.amount}
      id={item.id}
      key={item.id}
      deleteItem={deleteItem} // we pass deleteItem here to allow the item to delete itself
      />
    )
  })
  return (
    <div>
      {groceryList.length !==0 && <h3>Checklist</h3>}
      <div className='list-wrapper'>
        <div className='list'>
          { groceryList }
        </div>
      </div>
    </div>
  )
}

export default List;