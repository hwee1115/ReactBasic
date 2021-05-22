function ComBFunTypeEventHandling(props) {
    const handleBtn1 = (event) =>{
        console.log("버튼1이 클릭되었습니다.")
    };

    const handleBtn2 = (x,y) =>{
        const result = x+y;
        console.log("계산결과:" + result)
    };
    return (
      <div className="card">
        <div className="card-header">ComBFunTypeEventHandling</div>
        <div className="card-body">
            <button className = "btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
            <button className = "btn btn-info btn-sm mr-2" onClick={()=>handleBtn2(3,5)}>버튼2</button>
        </div>
      </div>
    );
  }
  
  export default ComBFunTypeEventHandling;