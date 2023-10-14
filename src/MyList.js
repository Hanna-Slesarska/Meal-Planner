const MyList = ({mealPlan, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return(
        <div className="list-container">
            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button className="button-add" onClick={addMeal}>Add</button>
            </div>
            <div>
                {mealPlan.map(({id, title, mealForADay}) => {
                   return <div className={`meal ${id === selectedDay ? 'selected' : 'default'}`}
                            onClick={() => setSelectedDay(id)}>
                        <p className="title">{title}</p>
                        <p className="title">{mealForADay.substring(0, 40)}</p>
                        <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}
export default MyList;