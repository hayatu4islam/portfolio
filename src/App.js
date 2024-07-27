import './App.css';
import Banner from './pages/Banner';
import Menu from "./pages/Menu";
import Quote from './pages/Quote';

function App() {
  return (
    <div className="App">
      <div className="super-container">
        <Menu />
      </div>
      <div className="App-header">
        <Banner />
      </div>
      <div><Quote /></div>
    </div>
  );
}

export default App;
