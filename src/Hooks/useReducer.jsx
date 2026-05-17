import React, { useState, useReducer } from "react";
import "./style.css";

export default function useReducer() {

const initialValue ={count : 0}


function reducer(state , action){

  switch(action.type){
   case 'increment' :
    return {count : state.count + 1};

    case "decrement":
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };

    default:
    return state;
  }
}

  const [state , dispatch ] = useReducer(reducer, initialValue );
  //React useReducer hook takes a reducer function and an initial state as arguments, and returns the current state along with a dispatch function to update the state.

  return (
    <div>
     <button onClick={()=> dispatch({type:'increment'})} >Incre</button>
     <h5>{state.count}</h5>
     <button onClick={()=> dispatch({type:'decrement'})} >Decre</button>
    </div>
  );
}
