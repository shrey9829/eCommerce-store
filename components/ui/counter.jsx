import React from "react";

const Counter = ({
  increaseCounter,
  decreaseCounter,
  disabled,
  quantity,
  increaseDisabled,
  decreaseDisabled,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 border p-1 rounded-md bg-gray-100">
      <button
        className={`${
          decreaseDisabled ? "bg-red-200 cursor-not-allowed" : "bg-white"
        } px-3 rounded-sm`}
        onClick={decreaseCounter}
        disabled={decreaseDisabled}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        disabled={increaseDisabled}
        className={`${
          increaseDisabled ? "bg-red-200 cursor-not-allowed" : "bg-white"
        } px-3 rounded-sm`}
        onClick={increaseCounter}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
