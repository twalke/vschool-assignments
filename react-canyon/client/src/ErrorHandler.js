function ErorrHandler(errMsg, children) {
  return (
    errMsg ?
    <p>{errMsg}</p> :
    children
  )
}

export default ErrorHandler;
