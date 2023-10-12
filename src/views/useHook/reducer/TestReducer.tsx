import { useEffect, useReducer, useRef } from "react";
import { Button } from "antd";
import DelayEffect from "./Effect";
import RefTest from "./RefTest";
import Countdown ,{CountdownHandle} from "./Countdown";
import ForwordRefTest from "./forwordRefDemo";
const initialState = {count:0};
type ACTIONTYPE = |{type:"increment";payload:number} | {type:"decrement",payload:string};

function reducer(state:typeof initialState,action:ACTIONTYPE){
  switch(action.type){
    case "increment":{
      return {count:state.count+action.payload}
    }
    case "decrement":{
      return {
        count:state.count - Number(action.payload)
      }
    }
    default:
      throw new Error()
  }
}


function Counter(){
  const [state,dispatch] = useReducer(reducer,initialState);
  const countdownEl = useRef<CountdownHandle>(null!);

  function handleCountdown(){
    countdownEl.current.start();
  }
  return (
    <>
     Count:{state.count}
     <br />
     <br />
     <Button type="primary" onClick={()=>dispatch({type:"decrement",payload:"6"})} style={{marginRight:20}}>-</Button>
     <Button type="primary" onClick={()=>dispatch({type:"increment",payload:10})}>+</Button>

     <div style={{marginTop:30}}>
      <DelayEffect timerMs={5}/>
     </div>

     <RefTest/>

     <div style={{marginTop:30}}>
      <Countdown ref={countdownEl} title="xxx的title" onClick={handleCountdown} getData={()=>{countdownEl.current.dataApi()}} />
     </div>

     <div style={{marginTop:20}}>
      <ForwordRefTest/>
     </div>
    </>
  )
}

export default Counter;