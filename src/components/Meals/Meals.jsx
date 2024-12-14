import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'


const Meals = () => {
    const data = useLoaderData(); 
    const meals = data.meals; 
    console.log(meals);
    return (
        <div>
            <h2 className="text-3xl">Meals Category : {meals.length} </h2>
            <div className="meals">
                {
                    meals.map(meal => <Meal key={meal.idMeal
                    } meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;