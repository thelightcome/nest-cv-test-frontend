import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import { tasksSlice } from "./tasks.slice"
import { createWrapper } from "next-redux-wrapper"

export const rootReducer = combineReducers({
  [tasksSlice.name]: tasksSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)