import Counter from './components/Counter';
import FruitItem from './components/FruitItem';
import Greeting from './components/Greeting';
import NameBox from './components/NameBox';
import UserProfile from './components/UserProfile';
import { useFruits } from './hooks/useFruits';

function App() {
  // return <h1>Hello, Yabesh!</h1>

  const name = 'Yabesh';
  const age = 22;
  const isMember = true;

  // for .map()
  const students = [
    { id: 1, name: "Aasha", city: "Kathmandu" },
    { id: 2, name: "Ravi", city: "Pokhara" },
    { id: 3, name: "Mina", city: "Lalitpur" },
  ];

  const {
    fruits,
    newFruit,
    setNewFruit,
    addFruit,
    removeFruit,
  } = useFruits();
  
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Next year you will be {age+1}.</p>
      <p>{isMember ? 'Welcome back, member!' : 'Please sign up.'}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aqWwysF4KexZFosRmH_JXdZsJMNJ3MIoRJUjR9q_Yg&s=10" alt="just an image of JUST" />


      <br />
      <br />      

      <h1>My React App</h1>
      <Greeting name={name} city="Dhangadhi" />
      <Greeting name="Prabhat" city="Dadeldhura"/>
      <Greeting name="Anup"/>

      <br />
      <br />

      <h1>User management</h1>

      <UserProfile name="Yabesh" role="Developer"/>
      <UserProfile name="Anup" role="Debugger"/>


      <br />
      <br />
      {
        students.map( student => (  // implicit return, so no curly braces
          <Greeting key={student.id} name={student.name} city={student.city} />
        ))
      }

      <br />
      <br />
      <Counter />

      <br />
      <br />
      <NameBox />

      <br />
      <br />
      <h1>My Favorite Fruits</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault(); // stop the page from reloading
          addFruit();
        }}
      >
        <input
          value = {newFruit}
          onChange = {(event) => setNewFruit(event.target.value)}
          placeholder='Type a fruit name'
        />

        <button type="submit">Add</button>
      </form>

      <p>You have {fruits.length} fruits.</p>

      <ul>
        {fruits.map((fruit) => (  // JSX turning a list into elements
          <FruitItem 
            key={fruit.id}
            name={fruit.name}
            onDelete={() => removeFruit(fruit.id)}
          />
        ))} 
      </ul>
      


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );

}

export default App;