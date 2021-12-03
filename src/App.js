import { useState } from "react";
const App = ()=>{
  const [toDoList,setList]=useState("")
  const [myArray,setArray]=useState([])
  const handler = (event) => {
    setList(event.target.value)
  }
  const addList = ()=>{
    setArray(old =>[...old,toDoList]);
    setList("")
  }
  return (
    <div>
      <h1>To do list</h1>
      <input id ="input" type="text" value={toDoList} onChange={handler} />
      <button type="submit" onClick={addList}>Add to list</button>
      {/* <h2>{toDoList}</h2> */}
      <h2 onClick={addList}>{myArray.map((num,index) =>{
        return <h2>{num}</h2>
      })}</h2>
    </div>
  )
}




export default App;
