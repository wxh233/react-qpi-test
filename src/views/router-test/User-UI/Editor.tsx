import {Form,useLoaderData} from 'react-router-dom';
import { contactType } from './contact-type';
export default function EditConact(){
   const {contact}:{contact:contactType} = useLoaderData() as {contact:contactType};
   return (
      <>
       <Form method='POST' id='contact-form'>
         <p>
            <span>Name</span>
            <input type="text"
              placeholder='First'
              aria-label='First Name'
              name='first'
              defaultValue={contact.first}
            />
            <input type="text"
              placeholder='Last'
              aria-label='Last name'
              name='last'
              defaultValue={contact.last}
            />
         </p>

         <label>
            <span>Avatar URL</span>
            <input type="text"
              placeholder='https://example.com/avatar.png'
              aria-label='Avatar URL'
              name='avatar'
              defaultValue={contact.avatar}
            />
         </label>
         <label>
            <p>
               <button type='submit'>Save</button>
               <button type='button'>Cancel</button>
            </p>
         </label>
       </Form>
      </>
   )
}