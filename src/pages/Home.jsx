import { useState, useEffect } from 'react';
import Layout from "../layout/Layout";
import Header from "../component/common/Header";
import List from "../component/features/List";
import Form from "../component/features/Form";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="App">
      { loading === true ? <h1 className='LoadingMessage'>로딩중입니다.</h1> : <>
          <Layout>
            <Header />
            <Form />
            <List />
          </Layout>
          <footer>이 페이지에는 마비노기가 제공한 마비옛체 서체가 적용되어 있습니다.</footer>
        </>}
      </div>
  );
}


export default Home;