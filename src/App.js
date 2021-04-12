import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="app">
      <Header /> 
      <Menu /> 
      <Card /> 
      <AdminPanel /> 
    </div>
  );
}

export default App;
