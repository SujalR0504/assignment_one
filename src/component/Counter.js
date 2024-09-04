import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  let count =0;
let a = "Chandan"
  const increment = () => {
    count = count + 1;
    setCounter(count)
    console.log("Count Value Local Increment", count)
    console.log("Increment",counter)
  }

  const decrement = () => {
    count = count - 1;
    setCounter(count)
    console.log("Count Value Local Decrement", count)
    console.log("Decremenet", counter)
  }

  // console.log("Outer Local COunt", count)
  
  const showAlert = () => {
    // let text = document.getElementById("one").value
    // window.alert(text)
    a="Vivek";
    console.log(a)
  }
  return (
    <div>
      <h1>{a}</h1>
    <input type='text' placeholder='Enter Name' id="one"/>
    <br></br>
    <button onClick = {()=> showAlert()}>Click Me</button>
      {/* <button onClick={()=>increment()}>
        +
      </button>
      {counter}
      <button onClick={()=>decrement()}>
        -
      </button> */}
    </div>
  )
}
