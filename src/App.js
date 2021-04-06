import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="app">
      <Header /> 
      <Menu /> 
      <Card /> 
    </div>
  );
}

export default App;
