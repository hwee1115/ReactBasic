import { useState } from "react";

function delayPromise(time){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        },time)
    });
    return promise;
}

function Exam01AsyncControl(props) {

    const [loading,setLoading] = useState(false);

    // const handleRequest = (event) =>{
    //     setLoading(true);
    //     delayPromise(3000)
    //     .then(result=>{})
    //     .catch(error=>{})
    //     .finally(()=>{
    //         setLoading(false);
    //     })
    // };

    const handleRequest = async (event) => {
      setLoading(true);
      try {
        const result = await delayPromise(3000);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
  return (
    <div className="card">
      <div className="card-header">Exam01AsyncControl</div>
      <div className="card-body">
        <button className="btn btn-primary btn-sm mr-2" onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3">
            {loading?
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">로딩 중...</span>
            </div>
            :
          <div>로딩 완료</div>
            }
        </div>
      </div>
    </div>
  );
}

export default Exam01AsyncControl;
