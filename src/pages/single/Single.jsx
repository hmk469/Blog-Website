import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/SinglePost/SinglePost"
import "./Single.css"
import React from "react";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
