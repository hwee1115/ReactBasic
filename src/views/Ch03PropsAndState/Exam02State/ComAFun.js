import { useState } from "react";

function getRandomColor(){
  return "#" + Math.floor(Math.random()*parseInt("ffffff",16)).toString(16);
}

function ComAFun(props) {
  const [state,setState] = useState({
    number:0,
    color:"black"
  });

  const addNumber = (event) => {
    setState({
      number:state.number+1,
      color:state.color
    });
  };

  const changeColor = (evnet) =>{
    setState({
      number:state.number,
      color: getRandomColor()
    });
  };

  console.log("렌더링");
    return (
      <div className="card">
        <div className="card-header">ComAFun</div>
        <div className="card-body">
            <h3 style ={{color:state.color}}>{state.number}</h3>
            <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
            <button className="btn btn-info btn-sm" onClick={changeColor}>색깔 변경</button>
        </div>
      </div>
    );
  }
  
  export default ComAFun;
  