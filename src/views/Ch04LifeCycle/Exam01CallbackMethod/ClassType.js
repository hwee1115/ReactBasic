import React from "react";

class ClassType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      startNum: 0,
    };
    console.log("constructor() 실행");
  }

  static getDerivedStateFromProps(props, prevState) {
    console.log("getDerivedStateFromProps() 실행");
    console.log("props", props);
    console.log("prevState", prevState);
    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
    if (prevState.startNum !== props.startNum) {
      return {
        number: props.startNum,
        startNum: props.startNum,
      };
    }else{
      return null
;    }
  }

  shouldComponentUpdate(nextProps,nextState){
    console.group("shouldComponentUpdate() 실행");
    console.log("nextProps:",nextProps);
    console.log("nextState",nextState);
    console.groupEnd();
    if(nextState.number%2===0){
      return true;
    }else{
      return false;
    }
    
  }

  render() {
    console.log("render() 실행");
    return (
      <div className="card">
        <div className="card-header">ClassType</div>
        <div className="card-body">
          number : {this.state.number}
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    console.log("componentDidUpdate() 실행")
  }

  componentDidMount() {
    console.log("componentDidMount() 실행");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount() 실행");
  }
}

export default ClassType;
