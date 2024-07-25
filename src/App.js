import './App.css';
import Banner from './pages/Banner';
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <div className="super-container">
        <Menu />
      </div>
      <div className="App-header">
        <Banner />
      </div>
    </div>
  );
}

export default App;
