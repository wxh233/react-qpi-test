import { Button } from "antd";
type PropsType= {
  children:string;
  isActive:boolean;
  onClick:()=>void;
}
function TabButton({children,isActive,onClick}:PropsType){
  if(isActive){
    return <span style={{fontWeight:700,marginRight:20}}>{children}</span>;
  }
  return <>
  <Button type="primary" style={{marginRight:20}} onClick={onClick}>{children}</Button>
  </>
}

export default TabButton;