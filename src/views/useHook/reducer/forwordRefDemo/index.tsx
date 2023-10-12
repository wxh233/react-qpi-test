import { Button } from "antd";
import { useRef } from "react";
import Post,{PostHandle} from "./Post";
function ForwordRefTest(){
  const postRef = useRef<PostHandle>(null!);
  function handleClick(){
    postRef.current.scrollAndFocusAddComment();
  }

  function handleToRandom() {
    postRef.current.scrollTopRandom();
  }
  return (
    <>
      <Button type="primary" danger onClick={handleClick}>Write a comment</Button>
      <Button type="primary" style={{marginLeft:20}} danger onClick={handleToRandom}>随机滚动</Button>
      <Post ref={postRef}/>
    </>
  )
}

export default ForwordRefTest;