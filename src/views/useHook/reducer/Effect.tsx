import { useEffect,useState } from "react";

function DelayEffect(props:{timerMs:number}){
  const {timerMs} = props;
  const [time,setTime] = useState<number|null>(timerMs)
  useEffect(()=>{
    setTime(timerMs);
    setTimeout(()=>{
     
    },timerMs*1000);
    // const timer = setInterval(()=>{
    //   console.log(time);
      
    //   if((time as number)<1){
    //     clearInterval(timer);
    //   }
    //   setTime((time as number) - 1);
    // },1000);
    //  return ()=>{
    //   clearInterval(timer);
    //  }

  },[timerMs]);




  return (
    <>
      <h1>这是一段测试文本,count: {time}</h1>
    </>
  )
}

export default DelayEffect;