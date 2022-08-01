import styled from "styled-components";

function Header() {  

  return (
    <>
      <AppHeader>
        <HeaderTitle>나의 버킷리스트</HeaderTitle>
        <HeaderTail>React Practice</HeaderTail>
      </AppHeader>
    </>
  )
}

const AppHeader = styled.div`
  background-color: #658A9E;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-size: 2rem;
  color:#ffffff;

  padding: 0.5rem 0;
`;

const HeaderTitle = styled.span`
  font-size: 1.5rem;
  
  padding-left: 1rem;
  margin-left: 0;
  margin-right: auto;
`;

const HeaderTail = styled.span`
  font-size: 1.5rem;

  padding-right: 1rem;
  margin-left: auto;
  margin-right: 0;
`;

export default Header;