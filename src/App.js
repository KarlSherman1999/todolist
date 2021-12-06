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
  const deleteHandler = (index) =>{
    let nums = [...myArray];
    nums.splice(index,1);
    setArray(nums);
  }
  return (
    <div>
      <h1>To do list</h1>
      <input id ="input" type="text" value={toDoList} onChange={handler}/>
      <button type="submit" onClick={addList}>Add to list</button>
      <h2 onChange={addList}>{myArray.map((num,index) =>{
        return <div key={index} value ="todoItem">
          <h2>{num}</h2>
          <button onClick = {() => deleteHandler(index)}>✔️</button>
          </div>
      })}</h2>
    </div>
  )
}




export default App;
