type Person = {
  name:string,
  age:number,
  location:string
}

type Copy = Omit<Person,"location">

declare const ButtonTypes: readonly ["default", "primary", "dashed", "link", "text"];
type ButtonType = typeof ButtonTypes[number];
const mytype:ButtonType = "default"