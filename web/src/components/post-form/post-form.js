import { useRef, useState } from 'react'

export const PostForm = () => {
  const [formData, setFormData] = useState(null)
  const titleInputRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    if (response.status === 200) {
      setFormData(null)
      titleInputRef.current.value = ''
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      title: e.target.value,
    })
  }

  return (
    <form method="POST" onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          ref={titleInputRef}
          onChange={handleChange}
          type="text"
          name="title"
          className="form-control"
          placeholder="Post title"
          aria-label="Post title"
        />
        <div className="input-group-append">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}
