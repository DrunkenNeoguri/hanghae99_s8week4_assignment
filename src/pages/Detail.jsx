import styled from "styled-components";
import Header from "../component/common/Header";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Detail () {
  const param = useParams();
  const navigate = useNavigate();
  const bucketInfo = useSelector(state => state.bucket.filter(object => object.id === param.id)[0]);

  return (
    <DetailContainer>
      <Header />
      <DetailBox>
        <DetailID>ID: {param.id}</DetailID>
        <DetailTitle>{bucketInfo.title}</DetailTitle>
        <DetailParap>{bucketInfo.context}</DetailParap>
        <PrevButton type="button" onClick={() => navigate('/')} >돌아가기</PrevButton>  
      </DetailBox> 
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin: 0 auto;

  width: 1200px;
  box-sizing: border-box;
`

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 5px solid #0B2B40;
  border-radius: 5px;
  margin: 7rem auto;

  width:30rem;
`

const DetailID = styled.div`
  display: block;

  font-size: 1.5rem;
  font-weight: 100;

  border-bottom:2px solid #000000;
  margin: 1rem;
`

const DetailTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color:#30A5BF;
  
  padding: 1rem;
  margin: 0;
`
const DetailParap = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  padding: 1rem;
  margin: 0;
`
const PrevButton = styled.button`
  background-color: #E76F51;

  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;

  border:none;
  border-radius:5px;
  padding: 0.5rem 1rem;
  margin: auto;
  margin-right:1rem;
  margin-bottom:1rem;

  cursor:pointer;
  transition: 0.2s ease;

  &:hover {
    background-color:#F4A261;

    transform:scale(1.1);
    transition: 0.2s ease;
  }
`


export default Detail;