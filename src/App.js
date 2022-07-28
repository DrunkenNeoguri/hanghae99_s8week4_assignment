import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './component/pages/TodoList';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="App">
      { loading === true ? <h1 className='LoadingMessage'>로딩중입니다.</h1> : <>
          <TodoList />
          <footer>이 페이지에는 마비노기가 제공한 마비옛체 서체가 적용되어 있습니다.</footer>
        </>}
      </div>
  );
}

export default App;
