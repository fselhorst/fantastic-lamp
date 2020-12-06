import { useContext } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from '../../components/loading/loading'
import { MealForm } from '../../components/meal-form/meal-form'
import { MealContext } from '../../provider/meal-provider'

import './meal.css'

const Meal = () => {
  const { meals, isLoading, removeMeal } = useContext(MealContext)
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="m-auto col-xs-12 col-sm-12 col-md-6">
          <MealForm />
        </div>
      </div>
      <div className="row">
        <div className="m-auto col-xs-12 col-sm-12 col-md-6">
          <ul className="list-group">
            {!isLoading &&
              meals.map(({ _id, price, name }) => {
                return (
                  <li
                    onClick={() => removeMeal(_id)}
                    className="list-group-item"
                    key={_id}
                  >
                    {name}
                    <p className="small">{price}</p>
                  </li>
                )
              })}
            {/* {!isLoading && posts.length === 0 && (
              <p className="text-center">Wow... very empty here 🙉</p>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Meal, {
  onRedirecting: () => <Loading />,
})
