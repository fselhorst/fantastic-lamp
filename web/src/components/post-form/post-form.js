import { useAuth0 } from '@auth0/auth0-react'
import { useContext, useRef, useState } from 'react'
import { PostContext } from '../../provider/post-provider'

import './post-form.css'

export const PostForm = () => {
  const { addPost } = useContext(PostContext)
  const [formData, setFormData] = useState(null)
  const formElementRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    if (formData !== null) {
      addPost(formData)
      formElementRef.current.value = ''
      setFormData(null)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (formElementRef.current && formElementRef.current.value) {
      setFormData({
        title: formElementRef.current.value,
      })
    } else {
      setFormData(null)
    }
  }

  return (
    <form method="POST" onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          ref={formElementRef}
          onChange={handleChange}
          type="text"
          name="title"
          className="form-control custom-input"
          placeholder="Post title"
          aria-label="Post title"
        />

        <button
          disabled={formData !== null ? undefined : 'disabled'}
          className="btn ml-3 btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
