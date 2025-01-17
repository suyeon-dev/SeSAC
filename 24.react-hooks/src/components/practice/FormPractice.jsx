import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='username'
        {...register('username', { required: true })}
      />
      <input type='number' placeholder='age' {...register('age', { min: 0 })} />
      <button type='submit'>제출</button>
      {errors.username && <span>이름은 필수 항목입니다.</span>}
      {errors.age && <span>0 이상의 숫자만 입력 가능합니다.</span>}
    </form>
  );
}
