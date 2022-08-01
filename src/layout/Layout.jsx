const Layout = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}


export default Layout;

// .container {
//   display: flex;
//   flex-direction: column;

//   text-align: center;
//   margin: 0 auto;

//   width: 1200px;
//   min-height: 800px;
//   box-sizing: border-box;
// }
