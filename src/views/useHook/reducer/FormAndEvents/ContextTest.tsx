import { createRef,PureComponent, ReactNode } from "react";

// type ThemeContextType = 'dark'| 'light';
// type ThemeContextType<T> = T;

// const ThemeContext = createContext<ThemeContextType<'dark'|'light'>>('dark')
type Props ={
  children:React.ReactElement
}

class CssThemeProvider extends PureComponent<Props>{
   private rootRef = createRef<HTMLDivElement>();
   render(): ReactNode {
     return  <div ref={this.rootRef}>{this.props.children}</div>
   }
}