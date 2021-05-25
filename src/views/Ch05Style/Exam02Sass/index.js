import style from "./style.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx =  classNames.bind(style);

function Exam02Sass(props) {
  const [state, setState] = useState({
    userId: null,
  });
  return (
    <div className="card">
      <div className="card-header">Exam02Sass</div>
      <div className="card-body">
        <div className={style.wrapper}>Hello,React</div>
        <div className={`${style.wrapper}${style.inverted} mt-3`}>Hello,React</div>
        {state.userId ? <div className={classNames(style.wrapper, style.inverted, "mt-3")}>Hello,React</div> : <div className={classNames(style.wrapper,"mt-3")}>Hello,React</div>}
        <div className={classNames(style.wrapper, {[style.inverted]:state.userId !==null}, "mt-3")}>Hello,React</div>
        <div className={cx("wrapper", {inverted:state.userId !==null}, "mt-3")}>Hello,React</div>
      </div>
    </div>
  );
}

export default Exam02Sass;
