import { useContext, useRef, useState } from 'react'
import { MealContext } from '../../provider/meal-provider'

import './meal-form.css'

export const MealForm = () => {
  const { addMeal } = useContext(MealContext)

  const [formData, setFormData] = useState(null)
  const formRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()
    if (formData !== null) {
      addMeal(formData)
      setFormData(null)
      formRef.current.reset()
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form ref={formRef} method="POST" onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="form-control custom-input"
          placeholder="Name"
          aria-label="Name"
        />
      </div>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          type="number"
          name="price"
          className="form-control custom-input"
          placeholder="Price"
          aria-label="Price"
        />
      </div>
      <button
        disabled={formData !== null ? undefined : 'disabled'}
        className="btn ml-3 btn-primary"
      >
        Submit
      </button>
    </form>
  )
}
