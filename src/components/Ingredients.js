

function Ingredients({
    ingredients, title, pre_time
}){
    console.log(ingredients)
    return(
    <div> 
        <h2>
        {title}
    </h2>
    <p>
        {pre_time}
    </p>
            {ingredients.map((ingSing,id)=>{
                return <li key={id}>{ingSing}</li>
            })}
        </div>
    
        /*
        <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ol>*/
    );
}

//this lets other components/ JS files 
export default Ingredients;