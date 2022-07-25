import bucketSlice from '../app/slice/bucketSlice';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

function BucketForm(props) {

  // const [bucketList, setBucKetList] = useState([]);
  // 버튼을 누르면 데이터를 보내준다.

  // Create버튼을 누르면 생기는 일
  // function sendBucketData(event) {
  //   event.preventDefault();
  //   console.log(event.target)
  //   const newid = bucketList.length + 1;  // 길이 늘려주고
  //   const newtitle = document.querySelector(".App--Form__title").value;  // 제목 받아오고
  //   const newcontext = document.querySelector(".App--Form__context").value; // 내용 받아오고
  //   console.log(newtitle, newcontext);
  //   const newBucket = {id:newid, title:newtitle, context:newcontext, state:"worked"};  // id, title, context 작성

  //   // bucketList.push(newBucket); // 그걸 일단 현재 버킷리스트에 추가
  //   // const newBucketList = [...bucketList];  // 추가된 배열을 전개하여 리액트가 내용물을 확인하게 함.
  //   // setBucKetList(newBucketList) // 내용물을 연 상태로 리액트에 보내 내용을 알게 만듦.
  //   // props.bucketList(newBucketList)
  // }
  const CREATE = "week3_assignment/bucket/CREATE"
  const dispatch = useDispatch();
  const bucket = useSelector(state=>{
    console.log(state.bucket);
    return state.bucket;
  });

  return (
    <form className="App--Form">
      <span>제목</span>
      <input type="text" className="App--Form__title" />
      <span>내용</span>
      <input type="text" className="App--Form__context" />
      <button type="button" className="App--Form__button" onClick={() => 
          dispatch(bucketSlice.actions.CREATE({
          id: bucket.length+1,
          title: document.querySelector(".App--Form__title").value,
          context: document.querySelector(".App--Form__context").value,
          state:"worked"
        }))}
        >추가하기</button>
    </form>
  )
}

export default BucketForm;



