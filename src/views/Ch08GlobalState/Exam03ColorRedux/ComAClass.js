import React from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/colorReducer";

class ComAClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.setColor("red");
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>
            색깔 변경
          </button>
          <div style={{ backgroundColor: this.props.color }}>내용</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    console.log(state.colorReducer.color)
    return{
        color:state.colorReducer.color
    }
}

const mapdDispatchToProps = (dispatch) =>{
    console.log("함수실행")
    return{
        setColor:(color) => dispatch(createSetColorAction(color))
    }

}
//connect: store에서 가지고 있는 참조 객체를 컴포넌트와 연결시켜줌
export default connect(mapStateToProps,mapdDispatchToProps)(ComAClass);