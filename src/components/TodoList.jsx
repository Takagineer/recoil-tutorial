import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../atoms/todoListState'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'


export const  TodoList = () =>{

  const todoList = useRecoilValue(todoListState)

  return (
    <>
    {/* <TodoListStats /> */}
    {/* <TodoListFilters /> */}
    <TodoItemCreator />
    
    {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}

export default TodoList