import React from 'react'
import './Post.css'
function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://images.pexels.com/photos/14930425/pexels-photo-14930425.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span><span className="postCat">Life</span>
        </div>
        <div className="postTitle">
            <span>Lorem ipsum dolor </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, saepe aliquam harum sunt quas inventore laboriosam iure assumenda ea optio accusamus illum cupiditate aspernatur, velit voluptatem, quam facilis pariatur culpa!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, saepe aliquam harum sunt quas inventore laboriosam iure assumenda ea optio accusamus illum cupiditate aspernatur, velit voluptatem, quam facilis pariatur culpa!
        </p>
      </div>
    </div>
  )
}

export default Post
