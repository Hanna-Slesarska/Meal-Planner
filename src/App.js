import './App.css';
import MyList from './MyList';
import MyMealAndIngridients from './MyMealAndIngridients';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [mealPlan, setMealPlan] = useState(localStorage.mealPlan ? JSON.parse(localStorage.mealPlan) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan))
  }, [mealPlan])

  const addMeal = () => {
    const newMeal = {
      title: 'Today is...',
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlan([newMeal, ...mealPlan]); 
  }
  const deleteDay = (mealId) => {
    setMealPlan(mealPlan.filter(({id})=> id !== mealId))
  }

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlan.map((plan) => {
      if (plan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return plan;
    })
    setMealPlan(updatedMeals);
  }
  const getActiveMeal = () => {
    return mealPlan.find(({id})=> id === selectedDay)
  }
  return (
    <div className="App">
      <MyList 
      mealPlan={mealPlan} 
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay} 
      setSelectedDay={setSelectedDay}/>
      <MyMealAndIngridients  selectedDay={getActiveMeal()} updateDay={updateDay}/>
    </div>
  );
}

export default App;
