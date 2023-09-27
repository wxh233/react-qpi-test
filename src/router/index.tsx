import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateContextTest from "../views/page1";
import ErrorPage from "../components/router-error";
import HomePage from "../views/page2";

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
  ]
},

{
  path:"/test",
  errorElement:<ErrorPage/>
}
]

const router = createBrowserRouter(routes);
export default router;