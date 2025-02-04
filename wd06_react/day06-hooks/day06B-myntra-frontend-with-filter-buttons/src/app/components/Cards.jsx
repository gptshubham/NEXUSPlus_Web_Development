import React, { useState } from 'react';
import Data from '../../utils/data.json';

const Card = () => {
  let [sortedData, setSortedData] = useState(Data);

  function sortLowToHigh() {
    const sortedArray = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sortedArray);
  }

  function sortHighToLow() {
    const sortedArray = [...sortedData].sort((a, b) => b.price - a.price);
    setSortedData(sortedArray);
  }

  function priceAboveRs500() {
    const sortedArray = [...sortedData].filter((a) => a.price >= 500);
    setSortedData(sortedArray);
  }

  return (
    <div>
      <div>
        <button
          className=" px-3 py-2 ml-30 mb-5 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold rounded"
          onClick={sortLowToHigh}
        >
          Price Low to High
        </button>
        <button
          className=" px-3 py-2 ml-5 mb-5 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold rounded"
          onClick={sortHighToLow}
        >
          Price High to Low
        </button>
        <button
          className=" px-3 py-2 ml-5 mb-5 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold rounded"
          onClick={priceAboveRs500}
        >
          Price above &#8377;500
        </button>
      </div>
      <div className=" flex gap-[10px] flex-wrap justify-center pl-[100px] pr-[100px]">
        {/* Cards */}
        {sortedData.map((value, index) => (
          <div className="border-[2px] border-solid border-gray-200 p-[5px] bg-[#707070] text-white">
            <img
              src={value.image}
              height="160px"
              width="160px"
              className="rounded-[10px]"
            />
            <div className="text-center">
              <h4 className="text-[14px] font-medium">{value.name}</h4>
              <h4 className="text-[18px] font-bold">{value.offer}</h4>
              <h4 className="text-[14px] font-medium">Shop Now</h4>
              <h2 className="text-[16px] font-semibold">
                Price: &#8377;{value.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
