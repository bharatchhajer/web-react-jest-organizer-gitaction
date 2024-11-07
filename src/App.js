import logo from './main.jpg';
import './App.css';
import TabContainerComponent from './components/TabContainerComponent.js';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-image" alt="logo" />
      </header>
      <TabContainerComponent />
      <div className="section-1"></div>
    </div>
  );
}

export default App;
