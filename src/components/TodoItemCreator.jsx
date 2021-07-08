import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoListState'


let id=0
const getId = () =>{
  return id++
}

function TodoItemCreator() {
  const [inputValue,setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  // todoListStateコンポーネントから、set関数のみを呼び出している

  const addItem = ()=>{
    setTodoList((oldTodoList)=>[
      ...oldTodoList,
      {
        id:getId(),
        text:inputValue,
        isComplete:false,
      }
    ])
    setInputValue('')
  }

  const onChange=({target:{value}})=>{
    setInputValue(value)
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  )
}

export default TodoItemCreator
