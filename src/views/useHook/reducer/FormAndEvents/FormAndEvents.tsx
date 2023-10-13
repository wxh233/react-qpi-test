import React from "react";

type State = {
  text:string
}
type Props = {}

class FormTest extends React.Component<Props,State>{
   state = {
    text:''
   };

   onChange = (e:React.FormEvent<HTMLInputElement>)=>{
     this.setState({
      ...this.state,
      text:e.currentTarget.value
     })
   }
    render(): React.ReactNode {
      return <>
        <div>
          <input type="text" value={this.state.text} onChange={this.onChange} />
        </div>
      </>
    }
}