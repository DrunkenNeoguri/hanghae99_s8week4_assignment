import Todo from './Todo';
import styled from 'styled-components';

function List() {

  return (
    
    <ListBody>
      <ListHead>
        <ListTitle>Working.. 🔥</ListTitle>
        <ListMain>
          <Todo key="Working" type="Working" />
        </ListMain>
      </ListHead>
      <ListHead>
        <ListTitle>Done..! 🎉</ListTitle>
          <ListMain>
            <Todo key="Done" type="Done" />
          </ListMain>
      </ListHead>
    </ListBody>
  )
}


const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0;
`

const ListHead = styled.div`
  margin:auto;

  width: 1200px;
  box-sizing: border-box;
`

const ListTitle = styled.div`
  display: block;

  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;

  padding-left: 1rem;
  margin: 2rem 0 1rem 0;
`
const ListMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap:1rem;

  margin:auto;

  box-sizing: border-box;
`

export default List;