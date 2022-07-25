import Todo from '../todo/Todo';
import './style.css';

function List() {

  return (
    <div className="container--body">
      <div className="container--body--Working">
        <span>Working.. 🔥</span>
        <div className="container--body--Working__list">
          <Todo type="Working" />
        </div>
      </div>
      <div className="container--body--Done">
        <span>Done..! 🎉</span>
          <div className="container--body--Done__list">
            <Todo type="Done" />
          </div>
      </div>
    </div>
  )
}

export default List;