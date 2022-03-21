import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
// create component / State hook / set state method
function Counter(){
  // detrautureing array
  const [count, setCount] = useState(0);

  // eventhandler use function call
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
  /* const decreaseCount = () => {
    const countNum = count - 1;
    setCount(countNum);
  } */

  // shortcut
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={increaseCount}>Increase</button>
     <button onClick={decreaseCount}>Decrease</button>
   </div> 
  )
}

// useEffect integrate state
function ExternalUsers () {
  const [users, setUsers] = useState([]);
  // useEffect diye API call kora
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
// user k style kora dakanor
function User(props){
  return(
    <div style={{border: '2px solid #333', margin: '10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
