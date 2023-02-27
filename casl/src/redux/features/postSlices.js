import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={ du: [
    {id:1, title : "Learning RTK", content: 'Redux ToolKit, Redux ToolKit Query'},
    {id:2, title : "Learning Firebase", content: 'Firebase auth, store'},
],
entities:[],
loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (id,thunkAPI) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    response = await response.json()
    return response
  }
)
   


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded:(state,action)=>{
            state.du.push(action.payload)
        }
    },

    extraReducers: (builder) => {

      builder

      .addCase(fetchUser.pending, (state, action) => {
        state.loading = 'pending';
        console.log(state.loading);
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
          state.entities.push(action.payload)
        })


      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = 'idle';
        console.log('Failed to fetch')
      })  
      
      }

})


export const {postAdded} = postSlice.actions;
export {fetchUser}
export default postSlice.reducer;
