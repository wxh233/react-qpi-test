import { useRef } from "react";
import ReactDOM  from "react-dom"; 
import { Button } from "antd";
import { createRoot } from "react-dom/client";
const modalRoot = document.querySelector("#root") as HTMLElement;
// type ModalProps ={
//   children:ReactNode
// }
function PortalTest(){
  const elRef = useRef<HTMLDivElement|null>(null);
  const portalContent = <p style={{color:"red",fontSize:"100px"}}>hello</p>;
  function handleClick(e:any){
    // console.log(e);
    // console.log(document.getElementById("#fuck"));
    // console.log(elRef.current);
    // const tt = document.getElementById("#root") 
    // const div = e.target.parentNode.parentNode;
    console.log(e);
    
    if(elRef.current){
      console.log(elRef.current);
      // createPortal(portalContent,elRef.current);
      ReactDOM.createPortal(portalContent,modalRoot);
      ReactDOM.createPortal(portalContent,elRef.current);
      createRoot(elRef.current).render(portalContent)
    }
    
  }

  
// type UserID = string & {readonly brand:unique symbol};
// const user1:UserID = "123" as UserID;
// console.log(user1);
// const user2:UserID = '456' as UserID;
// console.log(user2);
// const user3:UserID = '789' as UserID;
  return <>
    <div id="fuck" ref={elRef}>
      <p>这是一段红色文本</p>
      <Button type="primary" onClick={(e:any)=>handleClick(e)}>用createPortal创建节点</Button>
      {/* {ReactDOM.createPortal(portalContent, elRef.current)} */}
    </div>
  </>
}




export default PortalTest;