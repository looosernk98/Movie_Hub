import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <Dashboard/>
    </>
  );
}

export default App;
