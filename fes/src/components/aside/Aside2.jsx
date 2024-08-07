import React, { useState } from 'react';
import Login from '../../pages/login/Login';
import AdminLogin from '../../pages/login/AdminLogin';


const Aside2 = () => {
  const [loginType, setLoginType] = useState(null);

  const handleReload = () => {
    window.location.reload();
  };

  if (loginType === 'student') {
    return <Login />;
  }

  if (loginType === 'admin') {
    return <AdminLogin />;
  }


  
  return (
    <div id='aside2'>
      <div className="container">
        <div className='left'>
          <h1>Welcome to<br />
          LineArt Computer Academy</h1>
          <div className="left-logo"></div>
        </div>
        <div className="right">
          <header className="header">
          <div className="logo" onClick={handleReload}></div><h2 onClick={handleReload}>라인컴퓨터아트학원</h2>
          </header>
          <main className='main'>
            <div className="login-title">
              <h2>로그인</h2>
            </div>
            <div className="input-box">
              <button className='login-button' onClick={() => setLoginType('student')}>학생</button>
              <button className='login-button' onClick={() => setLoginType('admin')}>관리자</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Aside2;
