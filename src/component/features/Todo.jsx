import bucketSlice from '../../app/slice/bucketSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Todo (props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bucket = useSelector(state=>{
    return state.bucket;
  });

  return (
  props.type === "Working" ? 
  bucket.map((elem) => 
    elem.isDone === false ? 
      <ListBlock key={elem.id}>
        <ListBlockTitle fontColor="#D9896C">{elem.title}</ListBlockTitle>
        <ListBlockParagraph>{elem.context}</ListBlockParagraph>
        <ListBlockBtnBox>
          <ListBlockBtn type="button" onClick={() => 
              dispatch(bucketSlice.actions.DELETE({
              id: elem.id
            }))}>삭제하기</ListBlockBtn>
          <ListBlockBtn type="button" backGroundColor="#249EA0" onClick={() => {
            dispatch(bucketSlice.actions.UPDATE({
            id: elem.id,
            isDone:true
          }))}}>완료</ListBlockBtn>
          <ListBlockBtn type="button" backGroundColor="#008083" onClick={() => navigate(`/detail/${elem.id}`)}>상세보기</ListBlockBtn>
        </ListBlockBtnBox>
      </ListBlock> : false
  ) :
  bucket.map((elem) => 
    elem.isDone === true ? 
      <ListBlock key={elem.id} border="3px solid #658A9E">
        <ListBlockTitle fontColor="#658A9E">{elem.title}</ListBlockTitle>
        <ListBlockParagraph>{elem.context}</ListBlockParagraph>
        <ListBlockBtnBox>
          <ListBlockBtn type="button" onClick={() => 
            dispatch(bucketSlice.actions.DELETE({
            id: elem.id
          }))}>삭제하기</ListBlockBtn>
          <ListBlockBtn type="button" backGroundColor="#249EA0" onClick={() => {
            dispatch(bucketSlice.actions.UPDATE({
            id: elem.id,
            isDone:false
          }))}}>취소</ListBlockBtn>
          <ListBlockBtn type="button" backGroundColor="#008083" onClick={() => navigate(`/detail/${elem.id}`)}>상세보기</ListBlockBtn>
        </ListBlockBtnBox>
      </ListBlock> : false
  )
)}


const ListBlock = styled.div`
  border: ${props => props.border || "3px solid #D9896C"};
  border-radius: 8px;
`
const ListBlockTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: left;
  color: #D9896C;

  margin: 0;
  padding: 20px 0 0 20px;
`

const ListBlockParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  color: #000000;

  margin: 1rem 0 2rem 0;
  padding: 0 0 0 20px;
`
const ListBlockBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 1rem 0;
`

const ListBlockBtn = styled.button`
  background-color: ${props => props.backGroundColor || "#D9896C"};

  color:#ffffff;

  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.5rem 1rem; 

  box-shadow: 3px 3px 10px rgba(0,0,0, 10%);
  cursor:pointer;
  transition: 0.2s ease;

  &:hover{  
    transform: scale(1.05);
    transition: 0.2s ease;
  }
  
`


export default Todo;