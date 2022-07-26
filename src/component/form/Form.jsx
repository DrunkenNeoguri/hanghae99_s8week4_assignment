import bucketSlice from '../../app/slice/bucketSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

function Form(props) {
  const dispatch = useDispatch();
  const bucket = useSelector(state=>{
    return state.bucket;
  });

  return (
    <form className="App--Form">
      <span>제목</span>
      <input type="text" className="App--Form__title" />
      <span>내용</span>
      <input type="text" className="App--Form__context" />
      <button type="button" className="App--Form__button" onClick={() => {
            let _id = bucket.length;
            for (let i = 0; i < _id; i++) {
              if (bucket[i].id !== i) {
                _id = i;
                break
              }
            }
            dispatch(bucketSlice.actions.CREATE({
            id: _id,
            title: document.querySelector(".App--Form__title").value,
            context: document.querySelector(".App--Form__context").value,
            ongoing:"Working"
            }))
            document.querySelector(".App--Form__title").value = "";
            document.querySelector(".App--Form__context").value = "";
        }}
        >추가하기</button>
    </form>
  )
}

export default Form;



