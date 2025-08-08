import React from 'react';

//Định nghĩa một interface cho các props của component
interface SingleSkillProps {
  imgSvg: React.ReactNode; //Kiểu React.ReactNode cho phép nhận vào các phần tử JSX
  text: string;
}

//Áp dụng interface vào component
const SingleSkill: React.FC<SingleSkillProps> = ({ imgSvg, text }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4'>
      <div>{imgSvg}</div>
      <p className='text-lg font-semibold'>{text}</p>
    </div>
  )
}

export default SingleSkill