import { Form,useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { getContact } from "../../../router/contacts";
import {contactType} from './contact-type';

type D = {
  contactId:number
}

export async function loader({params}:{params:D}){
  const contact = await getContact(params.contactId);
  return {contact}
}

export default function Contact(){
  // const contact:contactType = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  const {contact}:{contact:contactType}= useLoaderData() as {contact:contactType};
  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <input type="hidden" name="wxh" value="huzs" />
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>

          <div style={{height:500}}>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  contact:contactType
}

function Favorite({ contact }:PropsType) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}