import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"

export interface Task {
  _id: string
  text: string
}

export interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload
    },
    addTask(state, action) {
      state.tasks.push(action.payload)
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t._id !== action.payload)
    },
    updateTask(state, action) {
      const e = state.tasks.find((t) => t._id === action.payload._id)
      if (e) e.text = action.payload.text
    }
  },
})

export const actions = {
  ...tasksSlice.actions
}

export const selectTasks = (state: AppState) => state.tasks.tasks

export default tasksSlice.reducer