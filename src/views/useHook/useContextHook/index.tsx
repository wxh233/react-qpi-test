import { useContext, ReactNode,useState } from "react";
import "./context.scss";
import {ThemeContext} from "./type";
import ContextMore from "./ContextMore";

interface PropsType{
  title?:string,
  children:ReactNode
  onClick?():void,
}
// const ThemeContext = createContext('');
 export default function UseContextHook(){
  const [theme,setTheme] = useState('dark');
  return<>  
  <ThemeContext.Provider value={theme}>
  <Form/>
  <br />
  <br />
  <button onClick={()=>{
   setTheme(theme==='dark'?'light':"dark")
   }}>change the Theme</button>
   </ThemeContext.Provider>
   <br />
   <br />
   <ContextMore/>
  </> 

 }


 function Form(){
   return (
    <Panel title="Welcome">
       <Button>Sign up</Button>
       <Button>Log in</Button>
    </Panel>
   )
 }

 function Panel({title,children}:PropsType){
   const theme = useContext(ThemeContext);
   const className="panel-"+theme;
   return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
   )
 }

 function Button({children}:PropsType){
   const theme  = useContext(ThemeContext);
   const className = 'button-' +theme;
   return (
    <button className={className}>{children}</button>
   )
 }