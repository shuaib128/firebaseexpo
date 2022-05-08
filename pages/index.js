import react, { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

export default function Home() {
  const [Posts, setPosts] = useState([])
  const postsConfigRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsConfigRef)
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getPosts()
  }, [])
  console.log(Posts);

  return (
    <div>
      {Posts.map((post, index) => (
        <>
          <h1>{post.Title}</h1>
          <p>{post.Description}</p>
          <p>{Date(post.Date.seconds)}</p>
        </>
      ))}
    </div>
  )
}
