import React from 'react'
import { useSelector } from 'react-redux'
import { fetchUser } from './redux/features/postSlices';
const PostList = () => {


  

    const posts = useSelector(state => state.posts.du);

    
    const renderPosts = posts.map(item=> (
        <article key={item.id} style={{border:'1px solid black',borderRadius:'2px',marginBottom:'1rem',margin:'4px'}}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </article>
    ))

  return (
    <div>
    {renderPosts}
    
    </div>
  )
}

export default PostList