import './App.css';
import District from './components/District/district';

function App() {
  return (
    <div className="App">
      <District name = "Chittagong" special = "Bussiness & Beautiful Place"></District>
      <District name = "Dhaka" special = "Capital of Bangladesh"></District>
      <District name = "Noakhali" special = "Bivag cai"></District>
    </div>
  );
}

export default App;
