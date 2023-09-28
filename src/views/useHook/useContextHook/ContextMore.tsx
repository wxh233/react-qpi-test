import { useState,useContext, ReactEventHandler, ReactNode } from "react";
import { ThemeContext,CurrentUserContext } from "./type";
import "./context.scss";

interface currentType{
  currentUser:any,
  setCurrentUser<T>(arg:T):void,
}

export default function ContextMore() {
  const [theme, setTheme] = useState('light');
  return (
     <MyProvider theme={theme} setTheme={setTheme}>
       <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>
     </MyProvider>
  )
}


function MyProvider({theme,setTheme,children}:{theme:string,setTheme:any,children:ReactNode}){
  const [currentUser, setCurrentUser] = useState(null);
  return(
    <>
     <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
      </CurrentUserContext.Provider>
     </ThemeContext.Provider>
    </>
  )
}

function WelcomePanel() {
  const {currentUser} = useContext(CurrentUserContext) as currentType;
  return (
    <Panel title="Welcome">
      {currentUser !== null ?
        <Greeting /> :
        <LoginForm />
      }
    </Panel>
  );
}

function Greeting() {
  const {currentUser,setCurrentUser} = useContext(CurrentUserContext) as currentType;
  return (
    <>
     <p>You logged in as {currentUser.name}.</p>
     <button onClick={()=>setCurrentUser(null)}>go back</button>
    </>
   
  )
}

function LoginForm() {
  const {setCurrentUser} = useContext(CurrentUserContext) as currentType;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  return (
    <>
      <label>
        First name{': '}
        <input
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{': '}
        <input
        required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

function Panel({ title, children }:{title:string,children:ReactNode}) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, disabled, onClick }:{children:ReactNode,disabled:boolean,onClick():void}) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
