import { ElementType, ReactPropTypes, forwardRef, useImperativeHandle, useRef } from "react"

export type CommentListHandle = {
  scrollToBootom:()=>void;
  scrollTopRandom:()=>void;
} 

type propsType = {
  comments:JSX.Element[]
}

const CommentList = forwardRef<CommentListHandle,propsType>(function CommentList(props,ref){
  const textRef = useRef<HTMLDivElement>(null!);
  const comments = props.comments;
  useImperativeHandle(ref,(()=>({
    scrollToBootom(){
      const Node = textRef.current;
      Node.scrollTop = Node.scrollHeight;
    },
    scrollTopRandom(){
      const Node = textRef.current;
      const top =Math.floor(Math.random()*Node.scrollHeight)
      Node.scrollTop = top;
    }
  })))

  const style = {
    height:200,
    overflow:'auto',
    border:"1px solid #000"
  }

  return  <>
    <div className="test-box" style={style} ref={textRef} >
    {
      comments
    }
    </div>
  </>
})

export default CommentList;