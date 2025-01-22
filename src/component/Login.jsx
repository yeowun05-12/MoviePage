import './scss/login.scss';

const Login = () => {
  return (
    <div className='login_cantainer'>
      <fieldset className='basics_login'>
        <h1> 로그인</h1>
        <input type='text' placeholder='아이디' name='id' />
        <input type='text' placeholder='비밀번호' name='Password' />
        <button> 로그인하기 </button>
      </fieldset>
      <div className='login_option'>
        <button className='kakao_login'> 카카오톡으로 로그인하기</button>
        <button className='naver_login'> 네이버로 로그인하기</button>
      </div>
    </div>
  );
};

export default Login;
