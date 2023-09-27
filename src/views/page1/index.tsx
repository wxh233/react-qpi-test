import { createContext ,useState} from "react";
import "./page1.scss"

function CreateContextTest(){
  const ThemeContext = createContext('light');
  const [theme,setTheme] = useState('light')

  function handleClick(){
    const th = theme=='light'?'dark':'light';
    setTheme(th)
  }
  return <>
  <ThemeContext.Provider  value={theme}>
    <button onClick={handleClick}>{theme=='light'?'to dark':'to light'}</button>
    <h1 className={"theme-"+theme}>这是一段creatContext测试页面</h1>
  </ThemeContext.Provider>
  </>
}

export default CreateContextTest;