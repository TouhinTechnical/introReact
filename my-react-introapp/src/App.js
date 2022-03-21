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
  // multiple line take object create ba array take object check kora
  const friends = ['Touhin', 'Tahin', 'Jannat','Sagor','Naima','Urmi','Tousif']
  const friendObjet = [
    {name:'Touhin', job:'web'},
    {name:'Tahin', job:'network'},
    {name:'jannat', job:'marketing'},
    {name:'Sagor', job:'designer'},
    {name:'Naima', job:'designer'}
  ]
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
      {
        // array take element add korle ta shoow korar jonno 
        friends.map(friend => <li>Name: {friend}</li>)
      }
      {
        friends.map(friend => <Person name = {friend}></Person>)
      }
      {
        // array object take object kujer bahir kora
        friendObjet.map(friendObjetMember => <Person name={friendObjetMember.name} profession={friendObjetMember.job}></Person>)
      }
      {/* <Person name = {friends[0]} profession = "Web"></Person>
      <Person name = {friends[1]} profession = "Network"></Person>
      <Person name = {friends[2]} profession = "Marketing"></Person> */}
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
