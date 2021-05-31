import { Route, Switch } from "react-router-dom";
import BoardWriteForm from "./BoardWriteForm";
import BoardTable from "./BoardTable";
import BoardRead from "./BoardRead";
import BoardUpdateForm from "./BoardUpdateForm";


function Exam03Board(props) {
    return (
      <div className="card">
        <div className="card-header">Exam03Board</div>
        <div className="card-body">
        <Switch>
                <Route path={`${props.match.url}`} exact component = {BoardTable}/>
                <Route path={`${props.match.url}/writeForm`} exact component = {BoardWriteForm}/>
                {/* pathvariable을 언급 */}
                <Route path={`${props.match.url}/:bno/read`} exact component = {BoardRead}/>
                <Route path={`${props.match.url}/:bno/updateForm`} exact component = {BoardUpdateForm}/>
        </Switch>
        </div>
      </div>
    );
  }
  
  export default Exam03Board;
  