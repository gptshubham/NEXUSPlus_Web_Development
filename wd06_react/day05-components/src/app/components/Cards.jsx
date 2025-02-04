import React from 'react';
import Data from '../../utils/data.json';

const Card = () => {
  return (
    <div className=" flex gap-[10px] flex-wrap justify-center pl-[100px] pr-[100px]">
      {/* Cards */}
      {Data.map((data, index) => (
        <div className="border-[2px] border-solid border-gray-200 p-[5px] bg-[#707070] text-white">
          <img
            src={data.image}
            height="300px"
            width="200px"
            className="rounded-[10px]"
          />
          <div className="text-center">
            <h4 className="text-[14px] font-medium">{data.name}</h4>
            <h4 className="text-[24px] font-bold">{data.offer}</h4>
            <h4 className="text-[14px] font-medium">Shop Now</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
