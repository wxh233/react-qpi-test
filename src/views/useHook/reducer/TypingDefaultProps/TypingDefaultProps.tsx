import React from "react";
// type GreetProps = {age:number} & typeof defaultProps;
// const defaultProps = {
//   age:21
// } 

// const Greet = (props:GreetProps)=>{
//   // etc
// }

// Greet.defaultProps = defaultProps;


// type GreetProps = typeof Greet.defaultProps & {age:number};

// class Greet extends React.Component<GreetProps>{
//   static defaultProps = {
//     age:21
//   }

//   render(): React.ReactNode {
//     return <>
//       <h1>{this.props.age}</h1>
//     </>
//   }
// }

// let el = <Greet age={33}/>

// export default el;
interface IProps {
  name: string;
}
const defaultProps = {
  age: 25,
};
const GreetComponent = ({ name, age }: IProps & typeof defaultProps) => (
  <div>{`Hello, my name is ${name}, ${age}`}</div>
);
GreetComponent.defaultProps = defaultProps;

const TestComponent = (props: React.ComponentProps<typeof GreetComponent>) => {
  const {name,age} = props;
  return <h1>姓名：{name}，年龄：{age}</h1>;
};
TestComponent.defaultProps = defaultProps


// Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
const el = <>
<TestComponent name="foo" age={22} />
<GreetComponent name="huzs"/>
</>;
export default el;