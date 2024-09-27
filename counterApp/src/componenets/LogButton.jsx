function LogButton ({isLogin, changeStatus}) {
  return ( 
    <>
    <button onClick={changeStatus}>{isLogin? "로그인 되었습니다." : "로그인 해주세요."}</button>
    </>
   );
}

export default LogButton;