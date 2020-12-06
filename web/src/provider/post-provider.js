import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, createContext } from 'react'
import config from '../config'

export const PostContext = createContext(null)

const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState(null)
  const { user } = useAuth0()

  const addPost = async (post) => {
    const response = await fetch(`${config.API_URI}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...post, author: user.email }),
    })

    if (response.status === 200) {
      const responseData = await response.json()
      setPosts([...posts, responseData])
    }
  }

  const removePost = async (postId) => {
    const response = await fetch(`${config.API_URI}/posts?id=${postId}`, {
      method: 'DELETE',
    })

    const removed = await response.json()
    if (response.status === 200) {
      setPosts(posts.filter((post) => post._id !== removed.id))
    }
  }

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(`${config.API_URI}/posts`, {
        headers: {
          'X-Author': user.email,
        },
      })
      const data = await response.json()
      setPosts(data)
      setIsLoading(false)
    }
    if (user) {
      fetchAPI()
    }
  }, [user])

  return (
    <PostContext.Provider value={{ posts, isLoading, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
