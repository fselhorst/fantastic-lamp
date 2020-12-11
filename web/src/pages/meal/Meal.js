import { useContext } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from '../../components/loading/loading'
import { MealForm } from '../../components/meal-form/meal-form'
import { MealContext } from '../../provider/meal-provider'

import './meal.css'

const Meal = () => {
  const { meals, isLoading, removeMeal } = useContext(MealContext)
  return (
    <>
      <div className="meal-container rounded pt-3 pl-4 mb-3 container mt-3">
        <div className="row">
          <div className="col">
            <MealForm />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group d-flex flex-row flex-wrap">
              {!isLoading &&
                meals.map(({ _id, price, name, description }) => {
                  return (
                    <div
                      key={_id}
                      className="card m-1"
                      style={{ width: '18rem' }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          € {price}
                        </h6>
                        <p className="card-text">{description}</p>
                        <button
                          onClick={() => {
                            const isOk = window.confirm('😱 r u sure?')
                            if (isOk) {
                              removeMeal(_id)
                            }
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })}
              {!isLoading && meals.length === 0 && (
                <p className="text-center">Wow... very empty here 🙉</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default withAuthenticationRequired(Meal, {
  onRedirecting: () => <Loading />,
})
