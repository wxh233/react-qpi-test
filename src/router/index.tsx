import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateContextTest from "../views/page1";
import ErrorPage from "../components/router-error";
import HomePage from "../views/page2";
import { lazy } from "react";
import Counter from "../views/useHook/reducer/TestReducer";
import TabContainer from "../views/useHook/useTranstion/UseTranstionTest";


const UseContextHook = lazy(()=>import("../views/useHook/useContextHook/index"))

const routes=[{
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/home",
      element:<HomePage/>
    },
    {
      path:"/createContext",
      element:<CreateContextTest/>
    },
    {
      path:"/useContext",
      element:<UseContextHook/>
    },
    {
      path:'/useReducer',
      element:<Counter/>
    },
    {
      path:'tabContainer',
      element:<TabContainer/>
    }
  ]
},

{
  path:"/test",
  errorElement:<ErrorPage/>
}
]

const router = createBrowserRouter(routes);
export default router;