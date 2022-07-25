import './style.css';

function Header() {  

  return (
    <>
      <div className="App--Header">
        <span>나의 버킷리스트</span>
        <span>React Practice</span>
      </div>
    </>
  )
}

// 파일이 분리가 됐는데 저 값을 어떻게 BucketList로 넘겨줄지?

export default Header;