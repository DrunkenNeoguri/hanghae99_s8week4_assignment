import Layout from "../layout/Layout";
import Header from "../header/Header";
import List from "../list/List"
import Form from "../form/Form";

const TodoList = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  )
}


export default TodoList;