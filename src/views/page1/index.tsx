import { createContext ,useState,useContext} from "react";
import "./page1.scss"
import { Button } from "antd";
const ThemeContext = createContext('light');
function CreateContextTest(){
  const [theme,setTheme] = useState('light')
  function handleClick(){
    const th = theme=='light'?'dark':'light';
    setTheme(th)
  }
  return <>
  <ThemeContext.Provider  value={theme}>
    <button onClick={handleClick}>{theme=='light'?'to dark':'to light'}</button>
    <h1 className={"theme-"+theme}>这是一段creatContext测试页面</h1>
    <Books />
  </ThemeContext.Provider>
  </>
}

function Books(){
  function handleContext(){
    console.log(useContext(ThemeContext));
    
  }
  return <>
   <Button type="primary" onClick={handleContext}>获取context</Button>
   <ul>
    <li>《西游记》</li>
    <li>《红楼梦》</li>
    <li>《水浒传》</li>
    <li>《三国演义》</li>
   </ul>
  </>
}

export default CreateContextTest;