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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="input-group mb-3 d-flex flex-column">
        <input
          className="form-control w-100 custom-input"
          placeholder="Naam van gerecht"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>Naam is verplicht</span>}
      </div>
      <div className="input-group mb-3 d-flex flex-column">
        <input
          className="form-control w-100 custom-input"
          placeholder="Prijs van gerecht"
          name="price"
          ref={register({ required: true, valueAsNumber: true })}
        />
        {errors.price && <span>Prijs is verplicht</span>}
      </div>
      <input
        className="btn btn-small btn-primary mb-3"
        value="Add meal"
        type="submit"
      />
    </form>
  )
}
