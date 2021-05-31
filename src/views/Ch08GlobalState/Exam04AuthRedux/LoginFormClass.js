import React from "react";
import { connect } from "react-redux";
import { createSetAuthToken, createSetUidAction } from "redux/auth-reducer";

class LoginFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
    };
  }

  handleChange = (event) => {
    this.setState({ uid: event.target.value });
  };

  login = (event) => {
    this.props.setUid(this.state.uid);
    //this.props.setAuthToken(this.props.authToken);
  };

  logout = (event) => {
    this.props.setUid("");
    //this.props.setAuthToken("");
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">LoginFormClass</div>
        <div className="card-body">
          <div className="form-group row">
            <label htmlFor="uid" className="col-sm-2 col-form-label">
              User ID
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="uid" name="uid" value={this.state.uid} onChange={this.handleChange} />
            </div>
          </div>
          {this.props.uid === "" ? (
            <button className="btn btn-success btn-sm" onClick={this.login}>
              로그인
            </button>
          ) : (
            <button className="btn btn-success btn-sm" onClick={this.logout}>
              로그아웃
            </button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps 실행")
  return {
    uid: state.authReducer.uid,
    authToken: state.authReducer.authToken,
  };
};

const mapdDispatchToProps = (dispatch) => {
  console.log("mapdDispatchToProps 실행")
  return {
    setUid: (uid) => dispatch(createSetUidAction(uid)),
    setAuthToken: (authToken) => dispatch(createSetAuthToken(authToken)),
  };
};

//connect: store에서 가지고 있는 참조 객체를 컴포넌트와 연결시켜줌
export default connect(mapStateToProps, mapdDispatchToProps)(LoginFormClass);
