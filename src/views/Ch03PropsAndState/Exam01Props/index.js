import ClassTypeProps from"./ClassTypeProps";
import FunctionTypeProps from "./FunctionTypeProps";




function Exam01Props(){
    return(
        <div className="card">
        <div className="card-header">Exam01Props</div>
        <div className="card-body">
          <ClassTypeProps name="React" version={15}>
            <div>자식 내용입니다.</div>
          </ClassTypeProps>
          <FunctionTypeProps name="React">
            <div>자식 내용입니다.</div>
          </FunctionTypeProps>
        </div>
      </div>
    )
}

export default Exam01Props;