import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
