import React from "react";

function Post({ title, author, postText, deletePost }) {
  const handleDelete = () => {
    deletePost();
  };

  return (
    <div className="postContainer">
      <div className="postTitle">
        <h2>{title}</h2>
        
      </div>
      <p>{postText}</p>
      <div className="postAuthor">
        <p>Author: {author.name}</p>
      </div>
      <button className="deleteButton" onClick={handleDelete}>
          Share (Not working right now)
        </button>
    </div>
  );
}

export default Post;
