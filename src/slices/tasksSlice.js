import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter()
const initialState = tasksAdapter.getInitialState()

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: tasksAdapter.addOne,
        removeTask: tasksAdapter.removeOne,
        toggleComplete: (state, action) => {
            const { id, completed } = action.payload.task
            console.log(completed)
            state.entities[id].completed = !completed

        }
    }
})

export const { actions } = tasksSlice
export default tasksSlice.reducer