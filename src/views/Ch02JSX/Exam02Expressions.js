function fun(){
    return "동작";
}

function Exam02Expressions(props) {
    const name="리액트"
    return(
        <div className="card">
        <div className="card-header">Home</div>
        <div className="card-body">
            <p>hello,{name}</p>
            <p>{name},{fun()}</p>
            <p>{2+3}</p>
        </div>
      </div>
    )
}

export default Exam02Expressions;