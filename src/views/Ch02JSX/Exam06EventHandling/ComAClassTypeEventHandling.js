import React from "react";

class ComAClassTypeEventHandling extends React.Component{
    constructor(props){
        super(props);
        //항상 클래스 객체 바인드
        this.handleBtn1 = this.handleBtn1.bind(this);
        this.handleBtn2 = this.handleBtn2.bind(this);
    }
     
    method1(){
        console.log("실행");
    }
    
    handleBtn1(event){
        console.log("버튼1이 클릭되었습니다.");
        this.method1();
        
    }
    handleBtn2(event,x,y){
        const result = x+y;
        console.log("계산결과:" + result)
    }

    handleBtn3 = ()=>{
        //화살표 함수의 this는 자신을 포함하고 있는 객체를 가리킴
        this.method1();
    };

    handleBtn4 = (event,x,y)=>{
        const result = x+y;
        console.log("계산결과:" + result)
        this.method1();
    };

    
    render(){
        return (
            <div className="card">
            <div className="card-header">ComAClassTypeEventHandling</div>
            <div className="card-body">
            <button className = "btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button>
            <button className = "btn btn-info btn-sm mr-2" onClick={(event)=>this.handleBtn2(event,3,5)}>버튼2</button>
            <button className = "btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼3</button>
            <button className = "btn btn-info btn-sm mr-2" onClick={(event)=>this.handleBtn4(event,3,5)}>버튼2</button>
         
            </div>
          </div>
        );
    }
};

export default ComAClassTypeEventHandling;