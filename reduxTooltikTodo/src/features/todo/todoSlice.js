import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, Text:"hello world"}]
}

export const todoSLice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                Text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:()=>{}
    }
})