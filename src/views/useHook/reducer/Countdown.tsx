import { forwardRef, useImperativeHandle, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import './api';


export type CountdownHandle = {
  start:()=> void;
  dataApi:()=>void;
}

type CountdownProps = {
  title:string;
  onClick:()=>void;
  getData:()=> void;
};

type  ApiParams = {
  id:number,
  base:string,
  week:string,
  ip:string
}

const Countdown = forwardRef<CountdownHandle, CountdownProps>((props,ref)=>{
  const  {title,onClick,getData} = props;
  const [info,setInfo] = useState<ApiParams|null>(null);
  useImperativeHandle(ref,()=>({
    start(){
      console.log("Start");
      alert("Start")
    },
    dataApi(){
       axios.get('/api/list')
       .then(res=>{
        console.log(res);
         setInfo(res.data.data)
       })
    }
  }))
  return <>
    <div style={{marginBottom:20}}>Countdown,{title}</div>
    <h2>查询信息:</h2>
    <p>
      {
        info?<>
        <ol>
          <li>日期：{info.base + info.week}</li>
          <li>IP：{info.ip}</li>
        </ol>
        </>:''
      }
    </p>
    <Button type="primary" onClick={onClick}>获取countdown</Button>
    <Button type="primary" style={{marginLeft:20}} onClick={getData}>查询数据</Button>
  </>
})

export default Countdown;