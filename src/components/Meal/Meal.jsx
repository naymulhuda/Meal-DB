

const Meal = ({meal}) => {
    const {idMeal, strMeal, strCategory, strArea, 
        strInstructions} = meal;
    
    const mealStyle = {
        border : '2px solid blue',
        padding: '5px',
        borderRadious : '10px'
    }

    return (
        <div style={mealStyle}>
            <h2>{strMeal}</h2>
            <p>Category : {strCategory}</p>
            <p>Area : {strArea} </p>

        </div>
    );
};

export default Meal;