import React from "react";

const Login = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h1>
            Welcome to
            <br />
            LineArt Computer Academy
          </h1>
          <div className="left-logo"></div>
        </div>
        <div className="right">
          <header className="header">
            <div className="logo" onClick={handleReload}></div>
            <h2 onClick={handleReload}>라인컴퓨터아트학원</h2>
          </header>
          <main className="main">
            <div className="login-title">
              <h2>수강생 로그인</h2>
            </div>
            <div className="input-box">
              <input
                className="login-input"
                type="text"
                placeholder="수강생 이름"
              />
              <input
                className="login-input"
                type="text"
                placeholder="수강생 비밀번호"
              />
              <button className="login-button">로그인</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Login;
