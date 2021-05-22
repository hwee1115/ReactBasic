function FunctionTypeProps(props) {
    return (
      <div className="card">
        <div className="card-header">FunctionTypeProps</div>
        <div className="card-body">
            <div>name:{props.name}</div>
            <div>version:{props.version}</div>
            {props.children}
        </div>
      </div>
    );
  }

  FunctionTypeProps.defaultProps = {
      version:17
  }
  
  export default FunctionTypeProps;