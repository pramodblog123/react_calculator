import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function Calculator() {

  const [result, setresult]=useState("")
  console.warn("const");
  function eventHandler(event){
    setresult(result+""+event.target.value);
  }

  function clear(){
    setresult("")
  }

  function value(){
  //  alert(result);
   setresult(eval(result));
  }

  return (
  <div>
    <input type="text" readOnly placeholder="0" value={result}  /><br />
    <input type="button" value="7" onClick={eventHandler}/>
    <input type="button" value="8" onClick={eventHandler}/>
    <input type="button" value="9" onClick={eventHandler}/>
    <input type="button" value="/" onClick={eventHandler}/><br/>
    <input type="button" value="4" onClick={eventHandler}/>
    <input type="button" value="5" onClick={eventHandler}/>
    <input type="button" value="6" onClick={eventHandler}/>
    <input type="button" value="*" onClick={eventHandler}/><br/>
    <input type="button" value="1" onClick={eventHandler}/>
    <input type="button" value="2" onClick={eventHandler}/>
    <input type="button" value="3" onClick={eventHandler}/>
    <input type="button" value="-" onClick={eventHandler}/><br/>
    <input type="button" value="0" onClick={eventHandler}/>
    <input type="button" value="." onClick={eventHandler}/>
    <input type="button" value="=" onClick={value}/>
    <input type="button" value="+" onClick={eventHandler}/><br/>
    <input type="button" value="C" onClick={clear}/><br/>
  </div>
)
}


export default Calculator;