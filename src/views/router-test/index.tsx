import "./router-test.css";
import { Outlet,Link,useLoaderData } from "react-router-dom";
import {getContacts} from '../../router/contacts.js';
type RouteType = {
  contacts:number
}
export default function RouterTest(){
  const {contacts}:any = useLoaderData();
  return (
    <>
      <div className="route-container">
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form action="search-form" role="search">
            <input  id="q"
             aria-label="Search contacts"
             placeholder="Search"
             type="search"
             name="q"
            />
            <div id="search-spinner"
            aria-hidden
            hidden={true}
            />
            <div 
              className="sr-only"
              aria-live="polite"
            ></div>
             
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {/* <ul>
            <li>
              <Link to={`/router/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/router/contacts/2`}>Your Friend</Link>
            </li>
          </ul> */}
          {
            contacts.length?(
              <>
               <ul>
                 {
                  contacts.map((contact:any)=>(
                    <li key={contact.id}>
                       <Link to={`contacts/${contact.id}`}>
                         {
                          contact.first || contact.last?(
                            <>{contact.first}{contact.last}</>
                          ):(<><i>No Name</i></>)
                         }{"  "}
                         {contact.favorite && <span>★</span>}
                       </Link>
                    </li>
                  ))
                 }
               </ul>
              </>
            ):(
            <>
            <p>
              <i>No contacts</i>
            </p>
            </>)
          }
        </nav>
      </div>
      <div id="detail">
          <Outlet/>
      </div>
      </div>
    </>
  )
}