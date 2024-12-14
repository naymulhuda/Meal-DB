import { useLoaderData } from "react-router-dom";


const Meals = () => {
    const data = useLoaderData(); 
    const meals = data.meals; 
    console.log(meals);
    return (
        <div>
            <h2 className="text-3xl">Meals Category : {meals.length} </h2>
        </div>
    );
};

export default Meals;