
export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}

// type Actions = 
//     | {type: 'add'; payload: string} 
//     |  {type: 'remove'; payload: number} 
//     | {type: 'done'; payload: number};
// const TodoReducer = (state: Todo[], action: Actions) => {

// }

// import React, { useReducer } from 'react'

// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, []);
//   return (
//     <div>model</div>
//   )
// }