import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>react-hook-form (설치 필요)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('username', { required: true })} />

        <input type='text' {...register('age', { required: true, min: 0 })} />

        <button type='submit'>제출</button>
        <div>
          {errors.username && <span>이름은 필수 항목입니다.</span>}
          {errors.age && <span>0이상의 숫자만 입력 가능합니다.</span>}
        </div>
      </form>
    </>
  );
}
