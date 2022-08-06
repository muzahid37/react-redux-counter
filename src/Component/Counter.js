import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrimentCounter, incrimentCounter, reset } from "../Servicies/Action/counterAction";

const Counter = () => {
    const count = useSelector((state)=> state.count );
    const dispatch= useDispatch();
    const handleIncrement=()=>{
        dispatch(incrimentCounter());
        
    }
    const handleDencrement=()=>{
        dispatch(decrimentCounter());
        
    }
    const handleReset=()=>{
        dispatch(reset());
        
    }
  return (
    <div>
      <h2>counter app</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDencrement}>Increment</button>
      <button onClick={handleReset}>Increment</button>
    </div>
  );
};

export default Counter;
