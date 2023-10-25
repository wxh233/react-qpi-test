import { useState  } from "react";
import TabButton from "./TabButton";
import About from "./About";
import Contact from "./Contact";
import Posts from "./Posts";
// useTransition 是一个帮助你在不阻塞 UI 的情况下更新状态的 React Hook。
function TabContainer(){
  // const [isPending,startTransition] = useTransition();
  const [tab,setTab] = useState<string>('about');
  function selectTab(nextTab:string){
    // startTransition(()=>setTab(nextTab))
    setTab(nextTab)
  };
  return <>
    <TabButton isActive={tab==='about'} onClick={()=>selectTab('about')}>About</TabButton>
    <TabButton isActive={tab==='posts'} onClick={()=>selectTab('posts')}>Posts(slow)</TabButton>
    <TabButton isActive={tab==='contact'} onClick={()=>selectTab('contact')}>Contact</TabButton>
    <hr />
    {
      tab==='about'&&<About/>
    }
    {tab==='posts'&& <Posts/>}
    {tab==='contact'&& <Contact/>}
  </>
}

export default TabContainer;