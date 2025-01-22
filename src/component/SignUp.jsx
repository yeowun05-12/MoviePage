const SignUp = () => {
  return (
    <fieldset className='sign_up_container'>
      <h1>회원가입</h1>
      <div className='sub_info'>
        <label name='id'>
          아이디 <input type='text' placeholder='아이디' name='id' />
        </label>
        <label name='password'>
          비밀번호{' '}
          <input type='password' placeholder='아이디' name='password' />
        </label>
        <label name='check_password'>
          비밀번호 확인
          <input type='password' placeholder='아이디' name='check_password' />
        </label>
      </div>
      <div className='user_info'>
        <label name='name'>
          이름 <input type='text' placeholder='이름' name='name' />
        </label>
        <label name='email'>
          이메일 <input type='email' placeholder='이메일' name='email' />
        </label>
        <label name='phone_num'>
          휴대폰 번호
          <input
            type='text'
            placeholder='숫자만 입력해주세요'
            name='phone_num'
          />
        </label>
      </div>
    </fieldset>
  );
};

export default SignUp;
