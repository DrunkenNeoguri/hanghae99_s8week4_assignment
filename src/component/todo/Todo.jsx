import bucketSlice from '../../app/slice/bucketSlice';
import { useSelector, useDispatch } from 'react-redux';

function Todo (props) {
  const dispatch = useDispatch();
  const bucket = useSelector(state=>{
    return state.bucket;
  });

  return (
  props.type === "Working" ? 
  bucket.map((elem) => 
    elem.ongoing === "Working" ? 
      <div className="Working__list__block">
        <h2>{elem.title}</h2>
        <p>{elem.context}</p>
        <div>
        <button value={elem.id} className='button__delete' type="button">삭제하기</button>
            <button value={elem.id} className='button__check' type="button" onClick={() => 
              dispatch(bucketSlice.actions.READ({
              id: elem.id,
              ongoing:"Done"
            }))}>완료</button>
        </div>
      </div> : false
  ) :
  bucket.map((elem) => 
    elem.ongoing === "Done" ? 
      <div className="Done__list__block">
        <h2>{elem.title}</h2>
        <p>{elem.context}</p>
        <div>
          <button value={elem.id} className='button__delete' type="button">삭제하기</button>
          <button value={elem.id} className='button__check' type="button" onClick={() => 
            dispatch(bucketSlice.actions.READ({
            id: elem.id,
            ongoing:"Working"
          }))}>취소</button>
        </div>
      </div> : false
  )
)}

export default Todo;