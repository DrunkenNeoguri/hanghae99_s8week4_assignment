import bucketSlice from '../../app/slice/bucketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import './style.css';

function Form(props) {
  const dispatch = useDispatch();
  const bucket = useSelector(state=>{
    return state.bucket;
  });

  // const initialState = {
  //   id : 0,
  //   title: "",
  //   context: "",
  //   isDone: false
  // }

  const titleRef = useRef();
  const contextRef = useRef();
  // const [form, setForm] = useState(initialState);
  // const saveInputValue = event => {
  //   const { name, value } = event.target;
  //   // 이 구조 할당이 아직 익숙하지 않은데 여기서 받아오는 값은 다음과 같다.
  //   // name = event.target의 name, value = event.target의 value
  //   setForm({...form, [name] : value})
  //   // 객체의 정보를 index로 받아오는 방법 외에도 저렇게 값을 지정해서 받아오는 것도 가능한 듯?
  //   // id는 계속 갱신시켜주기 보다는 데이터를 전달할 때 값을 전달해주는 쪽으로 잡아보기로 했다.
  // }

  const sendBucketData = event => {
    event.preventDefault();
    // React에서는 반드시 기본 동작이 발생하는 이벤트에서는 해당 함수를 사용할 것을 적극적으로 권장함.
    let _id = bucket.length;
    for (let i = 0; i < _id; i++) {
      if (bucket[i].id !== i) {
        _id = i;
        break
      }
    }
    let titleInput = titleRef.current.value
    let contextInput = contextRef.current.value

    if (titleInput === "")
      return alert("제목을 입력해주십시오.")
    if (contextInput === "")
      return alert("내용을 입력해주십시오.")
    // 이렇게 예외사항 처리를 해주자.
    // 여기서 아이디 체크해주고..
    dispatch(bucketSlice.actions.CREATE({
      id: _id,
      title: titleInput,
      context: contextInput,
      isDone: false
    }))
    // 어차피 앞에서 내용은 다 기입됐겠다, id만 적용해주면 되는 게 아닐까?
    // setForm(initialState)
    titleRef.current.value = "";
    contextRef.current.value = "";
}


  return (
    <form className="App--Form" onSubmit={sendBucketData}>
      <span>제목</span>
      <input type="text" ref={titleRef} className="App--Form__title" />
      {/* <input type="text" name="title" value={form.title} className="App--Form__title" onChange={saveInputValue} /> */}
      {/* 작성하다가 드는 생각인데 왜 value에는 form.title이 들어가야하는 걸까..? 이해를 내가 못 한 거 같다. */}
      <span>내용</span>
      <input type="text" ref={contextRef} className="App--Form__context" />
      {/* <input type="text" name="context" value={form.context} className="App--Form__context" onChange={saveInputValue} /> */}
      <button type="submit" className="App--Form__button">추가하기</button>
    </form>
  )
}

export default Form;

// onClick={() => {
//   let _id = bucket.length;
//   for (let i = 0; i < _id; i++) {
//     if (bucket[i].id !== i) {
//       _id = i;
//       break
//     }
//   }
//   dispatch(bucketSlice.actions.CREATE({
//   id: _id,
//   title : titleInput.current.value,
//   context : contextInput.current.value,
//   // title: document.querySelector(".App--Form__title").value,
//   // context: document.querySelector(".App--Form__context").value,
//   isDone:false
//   }))
//   titleInput.current.value = "";
//   contextInput.current.value = "";
// }}



