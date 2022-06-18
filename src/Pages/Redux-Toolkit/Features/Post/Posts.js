import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    post: [],
};


export const getPosts = createAsyncThunk(
    "post/getPosts",
    async (_,{rejectWithValue,dispatch}) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setPost(response.data));
    }
);
export const removePost = createAsyncThunk('post/removePost',
    async (id,{rejectWithValue,dispatch}) => {

})

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload
        }
    },
    exstraRedusers: {
        [getPosts.fulfilled]: () => console.log("f"),
        [getPosts.pending]: () => console.log("p"),
        [getPosts.rejected]: () => console.log("r")
    }
});
export const { setPost } = postSlice.actions;
export default postSlice.reducer;