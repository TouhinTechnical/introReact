import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name: 'touhin', job: 'singer'}
const singer2 = {name: 'jannat', job: 'singer2'}
// style variable diye declar korte pari
const singerStyle = {
  color: '#333',
  backgroundColor: 'white'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello React! How are you?</h3>
        </div>
        <div className="music">
          <p style = {singerStyle}>Name: {2222 + number}</p>
          <p>Name: {singer.name} {singer.job}</p>
          <p>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Create <code>src/App.js</code> and save to reload. Have fun!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2 className="App-headerText">Hello React App</h2>
      </header>

      <Person name = "Touhin" profession = "Web"></Person>
      <Person name = "Tahin" profession = "Network"></Person>
      <Person name = "Jannat" profession = "Marketing"></Person>
    </div>
  );
}
// notun function
function Person(props) {
  console.log(props);
  return (
    <div className = "person">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  );
}
export default App;
