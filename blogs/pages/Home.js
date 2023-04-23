import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, onSnapshot,doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import Post from "./Post";

function Home({ isAuth }) {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    await deleteDoc(doc(postsCollectionRef, id));
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollectionRef, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="home">
      
      {posts.map(({ id, data }) => (
        <Post
          key={id}
          id={id}
          title={data.title}
          postText={data.postText}
          author={data.author}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default Home;
