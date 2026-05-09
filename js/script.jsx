"use client";

const { div } = require("framer-motion/client");
const { useState } = require("react");

const arr = [1, 2, 3, 4, 5, [6, 7], [[8, 9]]];
const flatArr = arr.flat();
const deepFlatArr = arr.flat(2);
// console.log(deepFlatArr);

// const reverseArray = deepFlatArr.reverse();

// console.log(reverseArray);

function newArray() {
  const newArray = [];
  for (let i = deepFlatArr.length - 1; i >= 0; i--) {
    newArray.push(deepFlatArr[i]);
    console.log(i);
  }
  console.log(newArray);
}
// newArray();

// high order functions

function fun() {
  console.log("hello");
}

function fun2(action) {
  action();
  action();
}

fun2(fun);

export const CounterFun = () => {
  const [count, setCounter] = useState(0);

  return (
    <div className="absolute top-35">
      <div>{count}</div>
      <button onClick={() => setCounter(count + 1)}>click</button>
    </div>
  );
};
