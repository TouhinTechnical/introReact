// import logo from './logo.svg';
import './App.css';
import LoadCountries from './components/Country/Country';
import MenuBar from './components/Header/header';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;
