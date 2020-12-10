import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MealContext } from '../../provider/meal-provider'

import './meal-form.css'

export const MealForm = () => {
  const { addMeal } = useContext(MealContext)
  const { register, handleSubmit, errors, reset } = useForm()
  const onSubmit = (data) => {
    addMeal(data)
    reset()
  }

  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="input-group mb-2">
        <input
          autoComplete="off"
          className={`form-control ${errors.name ? 'border-danger' : null}`}
          placeholder="Meal name"
          name="name"
          ref={register({ required: true })}
        />
      </div>
      <div className="input-group mb-2">
        <input
          className={`form-control ${errors.name ? 'border-danger' : null}`}
          placeholder="Meal price"
          name="price"
          autoComplete="off"
          type="number"
          ref={register({ required: true, valueAsNumber: true })}
        />
      </div>
      <div className="input-group mb-2">
        <textarea
          className={`form-control ${errors.name ? 'border-danger' : null}`}
          placeholder="Meal description"
          name="description"
          autoComplete="off"
          ref={register({ required: true })}
        ></textarea>
      </div>
      <input
        className="btn btn-small btn-primary mb-3 mt-3"
        value="Add meal"
        type="submit"
      />
    </form>
  )
}
