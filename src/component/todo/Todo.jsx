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
    elem.isDone === false ? 
      <div key={elem.id} className="Working__list__block">
        <h2>{elem.title}</h2>
        <p>{elem.context}</p>
        <div>
        <button className='button__delete' type="button" onClick={() => 
            dispatch(bucketSlice.actions.DELETE({
            id: elem.id
          }))}>삭제하기</button>
            <button className='button__check' type="button" onClick={() => {
              dispatch(bucketSlice.actions.UPDATE({
              id: elem.id,
              isDone:true
            }))}}>완료</button>
        </div>
      </div> : false
  ) :
  bucket.map((elem) => 
    elem.isDone === true ? 
      <div key={elem.id} className="Done__list__block">
        <h2>{elem.title}</h2>
        <p>{elem.context}</p>
        <div>
          <button className='button__delete' type="button" onClick={() => 
            dispatch(bucketSlice.actions.DELETE({
            id: elem.id
          }))}>삭제하기</button>
          <button className='button__check' type="button" onClick={() => {
            dispatch(bucketSlice.actions.UPDATE({
            id: elem.id,
            isDone:false
          }))}}>취소</button>
        </div>
      </div> : false
  )
)}

export default Todo;