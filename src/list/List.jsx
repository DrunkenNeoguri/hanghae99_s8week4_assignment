import bucketSlice from '../app/slice/bucketSlice';
import { useSelector } from 'react-redux';
import './style.css';

function List() {
  const READ = "week3_assignment/bucket/READ"
  const bucket = useSelector(state=>{
    return state.bucket;
  });

  console.log(bucket);
  return (
    <div className="container--body">
      <div className="container--body--Working">
        <span>Working.. 🔥</span>
        <div className="container--body--Working__list">
          {bucket.map((elem) => 
            elem.state === "worked" ? 
              <div className="Working__list__block">
                <h2>{elem.title}</h2>
                <p>{elem.context}</p>
                <div>
                  <button className='button__delete' type="button">삭제하기</button>
                  <button className='button__check' type="button" value="worked">완료</button>
                </div>
              </div> : false
          )}
        </div>
      </div>
      <div className="container--body--Done">
        <span>Done..! 🎉</span>
          <div className="container--body--Done__list">
            {bucket.map((elem) => 
              elem.state === "done" ? 
                <div className="Done__list__block">
                  <h2>{elem.title}</h2>
                  <p>{elem.context}</p>
                  <div>
                    <button type="button">삭제하기</button>
                    <button type="button" value="done">완료</button>
                  </div>
                </div> : false
            )}
          </div>
      </div>
    </div>
  )
}

export default List;