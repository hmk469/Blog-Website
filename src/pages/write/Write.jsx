import "./Write.css";
import React from "react";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2017/10/10/21/49/home-office-2838944__340.jpg"
        alt=""
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus writeIcon"></i>
          </label>
          <input
            type="file"
            name=""
            style={{ display: "none" }}
            id="fileInput"
          />
          <input
            className="writeInput"
            type="text"
            name=""
            id=""
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name=""
            id=""
            cols="30"
            className="writeInput writeText"
            placeholder="Tell Your story"
            rows="3"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
