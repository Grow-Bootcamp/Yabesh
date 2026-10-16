type GreetingProps = {
  name: string;
  city?: string;
};

function Greeting({ name, city='an unknown city'}: GreetingProps) {
  // return <h2>Welcome to my website!</h2>

  return <h2>Hello {name} from {city}.</h2>
}

export default Greeting;


