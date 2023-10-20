import localforage from "localforage";
import sortBy from 'sort-by';
import { matchSorter } from "match-sorter";

type contactType = {
  id:number,
  createdAt:Date,

}

export async function getContacts(query?:string){
  await fakeNetWork(`getContacts:${query}`);
  let contacts = await localforage.getItem('contacts');
  console.log(contacts);
  
  if(!contacts) contacts = [];
  if(query){
    contacts = matchSorter(contacts as string[],query,{keys:['first','last']})
  }
  return (contacts as any[]).sort(sortBy('last','createAt'))
}

// 创建联系人
export  async function createContact(){
  await fakeNetWork();
  let id = Math.random().toString(36).substring(2,9);
  let contact = {id,createAt:Date.now()};
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

// 根据id获取联系人
export async function getContact(id:number){
  await fakeNetWork(`contact:${id}`);
  let contacts  = await localforage.getItem('contacts');
  let contact = (contacts as any).find((el:any)=>el.id===id);
  return contact ?? null;
}

// 更新联系人
export async function updateContact(id:number,updates:any){
  await fakeNetWork();
  let contacts = await localforage.getItem('contacts');
  let contact = (contacts as any).find((el:any)=>el.id===id);
  if(!contact) throw new Error("No contact found for " + id);
  Object.assign(contact,updates);
  await set((contacts as any));
  return contact;
}

// 根据id删除联系人
export async function deleteContact(id:number){
  await fakeNetWork();
  let contacts = await localforage.getItem('contacts');
  let index = (contacts as any).findIndex((el:any)=>el.id ===id);
  if(index>-1){
    (contacts as any).slpice(index,1);
    await set((contacts as any));
    return true;
  }
  return false;
}



function set(contacts:any[]){
  return localforage.setItem('contacts',contacts)
}

type fakeCacheType = {
  [key:string]:boolean
}
let fakeCache:fakeCacheType = {}

async function fakeNetWork(key?:any){
  if(!key){
    fakeCache = {}
  }

  if(fakeCache[key]){
    return ;
  }

  fakeCache[key] = true;
  return new Promise((res)=>{
    setTimeout(res,Math.random()*800)
  })

}