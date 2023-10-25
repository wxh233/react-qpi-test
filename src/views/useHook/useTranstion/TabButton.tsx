import { Button } from "antd";
import { useTransition } from "react";
type PropsType= {
  children:string;
  isActive:boolean;
  onClick:()=>void;
}
function TabButton({children,isActive,onClick}:PropsType){
  // 更新父组件的状态
  const [isPending,startTransition] = useTransition();
  console.log(isPending);
  
  if(isActive){
    return <span style={{fontWeight:700,marginRight:20}}>{children}</span>;
  }
  return <>
  <Button type="primary" style={{marginRight:20}} onClick={()=>startTransition(()=>onClick())}>{children}</Button>
  </>
}

export default TabButton;