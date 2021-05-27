import LoginFormClass from "./LoginFormClass";
import LoginFormClassFun from "./LoginFormClassFun";


function Exam02AppContext(props) {
    return (
      <div className="card">
        <div className="card-header">Exam02AppContext</div>
        <div className="card-body">
            <LoginFormClass/>
            <LoginFormClassFun/>
        </div>
      </div>
    );
  }
  
  export default Exam02AppContext;
  