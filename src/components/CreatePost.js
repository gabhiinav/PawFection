import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
  
    const postsCollectionRef = collection(db, "blogs");
    let navigate = useNavigate();
  
    const createPost = async () => {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/");
    };

  return (
    <>
    <div class="font-family-karla">
    <nav class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
    <div class="flex space-x-4">
    <div>
      <div class="flex items-center py-5 px-2">
      <a href="home" class="bg-black text-white font-bold text-xl p-4">Paw</a>
      </div>  
    </div>
    <div class="hidden md:flex items-center space-x-1">
      <h1 class="font-bold text-xl">Create Post</h1>
    </div>
    </div>
    </div>
    </div>
    </nav>
    <div class="py-32 text-center">
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CreatePost