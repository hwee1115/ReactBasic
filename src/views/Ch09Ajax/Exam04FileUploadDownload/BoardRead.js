import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BoardRead(props) {
    console.log("리드실행")
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo);

  
  const [board, setBoard] = useState({});
  //마운트, 업데이트 될 때 전부 실행
  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data);
      }catch(error){
        console.log(error);
      }
    };
    work();
  }, [bno]);

    //방법1
    const [imgSrc,setImgSrc]=useState(null);
    const imgTag = useRef();
    useEffect(()=>{
      if(board.battachoname){
          const work= async() => {
              try{
                  const response = await downloadAttach(board.bno);
                  setImgSrc(URL.createObjectURL(response.data));
                  // imgTag.current.src = URL.createObjectURL(response.data)
              }catch(error){
                  console.log(error);
              }
          };
          work();
      }
    },[board]);

  //방법2
  const authToken = useSelector(state => state.authReducer.authToken);

  const handleRemove = async (event) => {
    try{
      await deleteBoard(bno);
      props.history.goBack();
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="card">
    <div className="card-header">
      BoardRead
    </div>
    <div className="card-body">
      {board &&
      <>
        <div className="row">
          <div className="col-md-6">
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
            <p>bhitcount: {board.bhitcount}</p>
            <p>battachoname: {board.battachoname}</p>
            <p>battachsname: {board.battachsname}</p>
            <p>battachtype: {board.battachtype}</p>
          </div>

          <div className="col-md-6">
            {board.battachoname &&
              <div>
                {/* 방법1 */} 
                <img src={imgSrc} alt="" width="200"/>
                {/* 방법2 */}
                <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width="200" />
              </div>
            }
          </div>
        </div>

          <div>
            <Link to={"/ch09/exam04?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch09/exam04/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </>
      }
    </div>
  </div>
  );
}

export default BoardRead;