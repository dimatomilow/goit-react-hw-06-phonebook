import React from 'react'
import PostItem from './PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../Features/Post/Posts'
const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.post);
    console.log(posts)
    return (
        <div>
            <button
                type='submit'
onClick={()=>dispatch(getPosts())}
            >
                Get posts
            </button>
            {posts?.map(({ id, title }) => <PostItem key={id} title={ title} />)}
            <PostItem />
        </div>
    )
}

export default Posts
