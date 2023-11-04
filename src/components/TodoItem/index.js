// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteIt} = props
  const {id, title} = itemDetails

  const deleteItem = id => {
    deleteIt(id)
  }
  return (
    <li className="listItem">
      <p className="para">{title}</p>
      <button onClick={this.deleteItem} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
