import { createContext ,useState,useContext,useEffect } from "react";
import "./page1.scss"
import { Button } from "antd";
import axios from "axios";
import "./data"
// type ArrayObj = {
//   id:number,
//   book:string,
//   read:boolean
// }

type PropsType = {
  books: {
    id:number,
    book:string,
    read:boolean
  }[]|null;
}
type MyBook = PropsType[keyof PropsType];

const ThemeContext = createContext('light');
function CreateContextTest(){
  const [theme,setTheme] = useState('light')
  function handleClick(){
    const th = theme=='light'?'dark':'light';
    setTheme(th)
  }

  const [books,setBooks] = useState<null|MyBook>(null);

  useEffect(()=>{
     axios.get("/api/books").then((res)=>{
      console.log(res);
      setBooks([...res.data.list])
     })
  },[])
  return <>
  <ThemeContext.Provider  value={theme}>
    <button onClick={handleClick}>{theme=='light'?'to dark':'to light'}</button>
    <h1 className={"theme-"+theme}>这是一段creatContext测试页面</h1>
    <Books books={books} />
  </ThemeContext.Provider>
  </>
}

function Books({books}:PropsType):React.JSX.Element{
  function handleContext(){
    console.log(useContext(ThemeContext));
    
  }
  return <>
   <Button type="primary" onClick={handleContext}>获取context</Button>
   <ul>
   {
    books?.length?
    books.map((el)=>{
      return <li key={el.id}>{el.book}</li>
    }):''
   }
   </ul>
  </>
}

export default CreateContextTest;