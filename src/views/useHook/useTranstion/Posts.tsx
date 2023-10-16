import { ReactNode, memo } from "react";

type ItemType = ReactNode[];
const Posts = memo(function Posts(){
  const item:ItemType = [];
    for(let i=0;i<500;i++){
      item.push(SlowPost(i))
    }
  return <>
    <ul>{item}</ul>
  </>
})
type PropsType = number;
function SlowPost(index:PropsType){
  let startTime = performance.now();
  while(performance.now()- startTime<1){

  }

  return <>
    <li className="item">Post #{index+1}</li>
  </>
}

export default Posts;