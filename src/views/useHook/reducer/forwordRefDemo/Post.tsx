import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import CommentList,{CommentListHandle} from "./CommentList";
import AddComment ,{InputHandle} from "./AddComment";

export type PostHandle = {
  scrollAndFocusAddComment:()=>void;
  scrollTopRandom:()=>void;
}
type comType = JSX.Element[]

const Post  = forwardRef((props,ref)=>{
  console.log(props);
  
   const textRef = useRef<CommentListHandle>(null!);
   const inputRef = useRef<InputHandle>(null);
   useImperativeHandle(ref,(()=>({
    scrollAndFocusAddComment(){
      textRef.current?.scrollToBootom();
      inputRef.current?.foucs();
    },
    scrollTopRandom(){
      textRef.current.scrollTopRandom();
    }

   })))

   const [comments,setComments] = useState<comType>([])
  
   useEffect(()=>{
    const  data = []
    for(let i = 1;i<50;i++){
     data.push(<p>Comment #{i}</p>)
    }
    setComments([...data]);
   },[]);

   useEffect(()=>{
    textRef.current?.scrollToBootom();
    inputRef.current?.clear();
   },[comments])


   function saveComment(e:any){
      const code = e.keyCode;
      if(code==13){
        const data = [
          ...comments,
          <p>{e.target.value}</p>
        ]
        setComments([...data])
       
      }
   }

   return <>
     <p>Welcome to my blog</p>
     <CommentList ref={textRef} comments={comments} />
     <AddComment placeholder="Add comment" saveComment={saveComment} ref={inputRef}/>
   </>
})

export default Post;