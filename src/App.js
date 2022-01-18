
import Ingredients from  './components/Ingredients';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';



/*
task: build a collection of recipes
*/

function App() {
  const title_1 = 'Ramen';
  const pre_time_1 = '20 min';
    const ingredients_1= [
      'seasoning',
      '2 eggs',
      '1 cup of water',
      'some noodles' 
    ];

    const title_2 = 'Curry Mutton';
    const pre_time_2 = '40 min';
      const ingredients_2 =[
      'salt',
      'hot pepper',
      'curry powder',
      'scallions'
    ];

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
    <div className = 'recipe-parent'>
      <Ingredients  ingredients={ingredients_1}  title={title_1} pre_time={pre_time_1}/>
      <Ingredients   ingredients= {ingredients_2} title = {title_2}  pre_time={pre_time_2}/>




      <Button variant="contained" color="primary">
      Hello World
    </Button>


    </div>
  );
}

export default App;
