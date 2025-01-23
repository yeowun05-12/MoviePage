import './scss/signUp.scss';

const SignUp = () => {
  return (
    <div className='sign_up_section'>
      <fieldset className='sign_up_container'>
        <h1>회원가입</h1>
        <div className='sub_info'>
          <label name='email'>
            이메일 <input type='email' placeholder='이메일' name='email' />
          </label>
          <label name='name'>
            이름 <input type='text' placeholder='이름' name='name' />
          </label>
          <label name='password'>
            비밀번호{' '}
            <input type='password' placeholder='비밀번호' name='password' />
          </label>
          <label name='check_password'>
            비밀번호 확인
            <input type='password' placeholder='비밀번호 확인' name='check_password' />
          </label>
        </div>
        <button type='submit' className='sign_up_btn'>
          회원가입
        </button>
      </fieldset>
    </div>
  );
};

export default SignUp;
