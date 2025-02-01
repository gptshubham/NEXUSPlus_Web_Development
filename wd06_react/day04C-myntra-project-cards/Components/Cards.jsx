import React from 'react';

function Card(props) {
  return (
    <div className="border-[2px] border-solid border-gray-200 rounded-[10px] p-[5px]">
      <img
        src={props.image}
        height="300px"
        width="200px"
        className="rounded-[10px]"
      />
      <div className="text-center">
        <h4 className="text-[14px] font-medium">{props.cloth}</h4>
        <h4 className="text-[24px] font-bold">{props.offer}</h4>
        <h4 className="text-[14px] font-medium">Shop Now</h4>
      </div>
    </div>
  );
}

export default Card;
