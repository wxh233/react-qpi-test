import { useReducer } from "react";
import { Button } from "antd";
import DelayEffect from "./Effect";
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
    </>
  )
}

export default Counter;