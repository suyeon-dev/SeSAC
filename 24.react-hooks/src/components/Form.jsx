import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, //input의 변경 감지
    handleSubmit, //form의 Submit 이벤트 발생 시 호출
    watch, //특정 필드의 값을 실시간으로 관찰
    formState: { errors },
  } = useForm();

  //   단축 평가
  //   console.log('단축평가 || 논리합', true || 'hello'); //true
  //   console.log('단축평가 || 논리합', false || 'hello'); // 'hello'
  //   console.log('단축평가 && 논리곱', true && 'hi'); // 'hi'
  //   console.log('단축평가 && 논리곱', false && 'hello'); //false

  const userNameRegister = register('username');
  //   console.log('userNameRegister', userNameRegister); //객체 형태

  console.log('errors', errors);

  //   유효성 검증
  const onValid = (data) => {
    console.log('유효한 데이터', data);
    // {email, username, password}

    // axios 요청
  };

  const onInvalid = (err) => {
    // err가 들어오는 것과 동일
    console.log('유효하지 않은 데이터', err);
    // 폼 내부에 작성한 유효성 검사가 실패했을 때의 코드 작성
  };

  console.log('watch 결과 확인', watch());
  console.log('watch username', watch('username'));

  return (
    /* 
    handleSubmit(funcA[, funcB]): 인자로 함수를 2개 받음
    - 자동으로 새로고침 방지 (e.prevent.default 안 써도 됨)
    - funcA: 필수! 유효성 검증이 만족했을 때, 실제 제출할 때 실행
    - funcB: 선택, 유효성 검증이 유효하지 않을 때 실행될 함수
    */
    <form
      style={{ border: '1px solid salmon' }}
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <input
        type='text'
        placeholder='username'
        {...register('username', {
          // required 가 지켜지지 않았다면 Errors 객체로 메시지 전달됨
          // errors.username.message
          required: '이름을 입력해주세요',
          minLength: {
            message: '이름은 최소 두글자 이상으로 입력해주세요.',
            value: 2, //minLength
          },
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type='email'
        placeholder='email(gmail)'
        {...register('email', {
          required: '이메일을 입력해주세요.',
          validate: {
            useGmail: (value) => {
              // 인자로 들어오는 Value는 input.value
              return (
                // 앞의 연산이 True라면 true 리턴
                // 앞의 연산이 False라면 뒤의 String 리턴
                value.includes('gmail.com') || 'gmail로만 가입 가능합니다.'
              );
              //   console.log('value', value);
            },
          },
        })}
      />
      {errors.email?.message}
      <br />
      <input type='password' placeholder='password' {...register('password')} />
      <br />
      <button type='submit'>submit</button>
    </form>
  );
}
