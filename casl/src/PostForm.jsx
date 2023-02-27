import React,{useReducer,useEffect} from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch,useSelector } from 'react-redux'
import { postAdded  } from './redux/features/postSlices'
import { fetchUser } from './redux/features/postSlices'

const PostForm = () => {


   

    const reducer = (state, action) => {
        switch (action.type) {
            case 'title' :
                return {
                  ...state,
                    title: action.payload
                }
            case 'content' :
                return {
                  ...state,
                    content: action.payload
                }
            default :
            return state
             //   throw new Error();
        }
    }

    const[state,dispatcha] = useReducer(reducer, {title:'', content:''} )

    const dispatch = useDispatch() 
    
  
    useEffect(()=>{
        //console.log(state)
    },[])

   
function handleSubmit(e) {
  
    e.preventDefault();
    dispatch(fetchUser(1))
    dispatch(postAdded({
        id: nanoid(),
                title: state.title,
             content: state.content
         }))
}

const temp = useSelector(store => store.posts.entities);

console.log('temp',temp)



  return (
    <div>
    <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={state.title} onChange={e => dispatcha({type: 'title', payload: e.target.value})} />
            <label>Content</label>
            <textarea value={state.content} onChange={e => dispatcha({type: 'content', payload: e.target.value})} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PostForm