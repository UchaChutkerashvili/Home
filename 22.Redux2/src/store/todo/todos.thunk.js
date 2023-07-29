import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
    '/todos/GET',
    async (_, ThunkApi) => {
        try {
            const res = await fetch('api/v1/todos', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw'
                }
            })
            console.log(res)
            const data = await res.json()
            if (data) return ThunkApi.fulfillWithValue(data.items)
        }   catch (error) {
            console.log("smthing went wrong")
        }
    }    
)