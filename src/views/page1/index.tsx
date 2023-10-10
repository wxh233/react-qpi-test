import { createContext ,useState,useContext,useEffect} from "react";
import "./page1.scss"
import { Button } from "antd";
import axios, { AxiosResponse } from "axios";
import "./data"
type ArrayObj = {
  id:number,
  book:string,
  read:boolean
}
type MyBook = ArrayObj[];
const ThemeContext = createContext('light');
function CreateContextTest(){
  const [theme,setTheme] = useState('light')
  function handleClick(){
    const th = theme=='light'?'dark':'light';
    setTheme(th)
  }

  const [books,setBooks] = useState<AxiosResponse|null|void|MyBook>(null);

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

function Books(books:MyBook){
  function handleContext(){
    console.log(useContext(ThemeContext));
    
  }
  return <>
   <Button type="primary" onClick={handleContext}>获取context</Button>
   <ul>
   {
    books?.length?
    books.map((el:ArrayObj)=>{
      return <li key={el.id}>{el.book}</li>
    }):''
   }
   </ul>
  </>
}

export default CreateContextTest;