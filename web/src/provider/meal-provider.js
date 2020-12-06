import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect, createContext } from 'react'
import config from '../config'

export const MealContext = createContext(null)

const MealProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState(null)
  const { user } = useAuth0()

  const addMeal = async (meal) => {
    const response = await fetch(`${config.API_URI}/meals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...meal, owner: user.email }),
    })

    if (response.status === 200) {
      const responseData = await response.json()
      setMeals([...meals, responseData])
    }
  }

  const removeMeal = async (mealId) => {
    const response = await fetch(`${config.API_URI}/meals?id=${mealId}`, {
      method: 'DELETE',
    })

    const removed = await response.json()
    if (response.status === 200) {
      setMeals(meals.filter((meal) => meal._id !== removed.id))
    }
  }

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(`${config.API_URI}/meals`, {
        headers: {
          'X-Owner': user.email,
        },
      })
      const data = await response.json()
      setMeals(data)
      setIsLoading(false)
    }
    if (user) {
      fetchAPI()
    }
  }, [user])

  return (
    <MealContext.Provider value={{ meals, isLoading, addMeal, removeMeal }}>
      {children}
    </MealContext.Provider>
  )
}

export default MealProvider
