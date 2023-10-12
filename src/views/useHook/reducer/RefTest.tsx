import { useEffect, useRef } from "react";

function RefTest() {
  const divRef = useRef<HTMLDivElement>(null!);
  useEffect(()=>{
    if(!divRef.current){
      throw Error("divRef is not defined")
    }

    doSomethingWith(divRef.current)
  })

  function doSomethingWith<T extends HTMLDivElement>(div:T){
    setTimeout(()=>{
       div.style.color = "red";
    },2000)
  }

  return <>
    <div ref={divRef}>etc</div>
  </>
}

export default RefTest;