import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

//phly sab kaam store k andar aik object main krletay thy ab hum diff cheezon ka data jo store main ayega unkay slices banatay hain jese k agar user k data ka slice banarhy tou file ka naam userslice.ts krdenge
export type Todo = {
  done: boolean;
  text: string;
};
const initialState: Todo[] = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todoObj: Todo = { done: false, text: action.payload };
      state.push(todoObj);
    },
    doneTodo: (state, action: PayloadAction<number>) => {
      state[action.payload].done = !state[action.payload].done;
    },
  },
});

export const { addTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
