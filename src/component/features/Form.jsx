  import bucketSlice from '../../app/slice/bucketSlice';
  import { useDispatch } from 'react-redux';
  import { useRef } from 'react';
  import styled from 'styled-components';
  // import nextId from 'react-id-generator';
  // 왜 작동이 안하는지 나중에 연구해보자.

  function Form(props) {
    // const newId = nextId();
    // 왜 신규 id가 안되는 걸까... 어디서 문제가 있는거지????
    // 설마 detail 쪽의 dispatch가 그런 쪽인걸까?

    const dispatch = useDispatch();
    // const bucket = useSelector(state=>{
    //   return state.bucket;
    // });

    const titleRef = useRef();
    const contextRef = useRef();

    const sendBucketData = event => {
      event.preventDefault();
      // React에서는 반드시 기본 동작이 발생하는 이벤트에서는 해당 함수를 사용할 것을 적극적으로 권장함.
      // let _id = bucket.length;
      // for (let i = 0; i < _id; i++) {
      //   if (bucket[i].id !== i) {
      //     _id = i;
      //     break
      //   }
      // }
      let titleInput = titleRef.current.value
      let contextInput = contextRef.current.value

      if (titleInput === "")
        return alert("제목을 입력해주십시오.")
      if (contextInput === "")
        return alert("내용을 입력해주십시오.")
      // 이렇게 예외사항 처리를 해주자.
      // 여기서 아이디 체크해주고..
      dispatch(bucketSlice.actions.CREATE({
        id: new Date().getTime().toString(16),
        // 날짜 객체를 생성하고, 현재 시간을 받아온 뒤 16진수로 내용을 변경했다.
        // 시간은 매번 달라지기 때문에 이걸 이용한다면 고유의 ID는 확실히 생성할 수 있겠다.
        // 예전에 헥사코드라는 게 16진수로 쓰인다는 게 생각나서, 문득 이렇게 작성해보고 싶었다.
        // 물론 그런 이유로 이렇게 했다라는 건 목적성이 없는 설명이라 좋지 않은 사례지만(....)
        // 아무튼 다음번에는 id를 배치해도 왜 이렇게 배치했는지를 더 고민해보자.
        // id: Math.random(titleInput).toString(36).substring(2, 9),
        title: titleInput,
        context: contextInput,
        isDone: false
      }))
      // 그래서 방식을 바꿨다. length가 안된다면.. 고유 ID를 만들어주는 함수를 넣어주는건?

      titleRef.current.value = "";
      contextRef.current.value = "";
    }


    return (
      <AppForm onSubmit={sendBucketData}>
        <AppFormLabel>제목</AppFormLabel>
        <AppFormInput type="text" ref={titleRef} />
        <AppFormLabel>내용</AppFormLabel>
        <AppFormInput type="text" ref={contextRef} />
        <AppFormButton type="submit">추가하기</AppFormButton>
      </AppForm>
    )
  }

  export default Form;


const AppForm = styled.form`
  background-color: #B1C6BF;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  font-size: 2rem;
  color:#ffffff;

  padding:1rem;
  border-radius: 0 0 1rem 1rem;
`
const AppFormLabel = styled.span`
  font-size: 1.3rem;

  margin: 0 1rem;
`

const AppFormButton = styled.button`
  background-color: #D9D1C0;

  padding: 0.5rem 1.5rem;
  margin-left: auto;

  border: none;
  outline: none;
  border-radius: 2rem;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover{  
    //   background-color: #E6BE92;
    //   transform: scale(1.05);
    //   transition: 0.2s ease;
  }
`

const AppFormInput = styled.input`
  font-size: 1rem;

  border: none;
  border-radius: 1rem;
  outline: none;
  padding: 0.5rem 1rem;

  width: 250px;
`