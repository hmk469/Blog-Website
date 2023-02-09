import React from "react";
import './SinglePost.css'
export default function SinglePost() {
  return <div className="singlePost">
    <div className="singlePostWrapper">
      <img className="singlePostImg" src="https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047__340.jpg" alt="" />
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit 
        <div className="singlePostEdit">
        <i class="fa-regular singlePostIcon fa-pen-to-square"></i>
        <i class="fa-solid  fa-trash"></i>     
         </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>HMK</b>
        </span>
        <span className="singlePostDate">
         one hour ago
        </span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum voluptate laudantium labore, aliquam tenetur vel voluptatum aut facilis voluptates, incidunt ea quidem iste voluptatem quae modi repellat, commodi neque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum voluptate laudantium labore, aliquam tenetur vel voluptatum aut facilis voluptates, incidunt ea quidem iste voluptatem quae modi repellat, commodi neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum voluptate laudantium labore, aliquam tenetur vel voluptatum aut facilis voluptates, incidunt ea quidem iste voluptatem quae modi repellat, commodi neque!
      </p>
    </div>
  </div>;
}
