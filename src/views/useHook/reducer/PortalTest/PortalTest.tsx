import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom"; 
import { Button } from "antd";
const modalRoot = document.querySelector("#root") as HTMLElement;
type ModalProps ={
  children:ReactNode
}
function PortalTest(){
  // const elRef = useRef<HTMLDivElement | null>(null);
  // if(!elRef.current) elRef.current = document.createElement("div");
  // useEffect(()=>{
  //    const el = elRef.current!;
  //    modalRoot.appendChild(el);
  //    return ()=>{
  //     modalRoot.removeChild(el);
  //    }
  // },[])

  function handleClick(){
     createPortal(<p style={{color:"red"}}>hello</p>,document.getElementById("#fuck")! as HTMLElement);
     createPortal(<p style={{color:"red"}}>hello</p>,modalRoot);
  }

  
type UserID = string & {readonly brand:unique symbol};
const user1:UserID = "123" as UserID;
console.log(user1);
const user2:UserID = '456' as UserID;
console.log(user2);
const user3:UserID = '789' as UserID;
  return <>
    <div id="fuck">
      <p>这是一段红色文本</p>
      <Button type="primary" onClick={handleClick}>用createPortal创建节点</Button>
    </div>
  </>
}




export default PortalTest;