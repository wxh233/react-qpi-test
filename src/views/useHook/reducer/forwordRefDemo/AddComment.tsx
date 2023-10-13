import { forwardRef, useImperativeHandle, useRef} from "react";
import Input, { InputRef } from "antd/es/input/Input";

export type InputHandle = {
  foucs:()=> void;
  clear:()=>void;
}

type InputProps ={
  placeholder:string;
  saveComment:(e:React.KeyboardEvent<HTMLInputElement>)=>void;
}


const AddComment = forwardRef<InputHandle,InputProps>(({placeholder,saveComment},ref)=>{
  const inputRef = useRef<InputRef>(null!)
  useImperativeHandle(ref,(()=>{
    return {
      foucs(){
        inputRef.current.focus();
      },
      clear(){
        inputRef.current.input!.value = '';
      }
    }
  }))
  return <>
    {/* <input type="text" placeholder={placeholder} ref={inputRef} onKeyUp={(e)=>{saveComment(e)}} /> */}
    <Input placeholder={placeholder} ref={inputRef} onKeyUp={(e)=>{saveComment(e)}} />
  </>
})

export default AddComment;