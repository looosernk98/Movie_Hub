import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Movies from './components/movies';
import WebSeries from './components/series';
import { Route, Routes } from 'react-router-dom';

function App() {

  const ROUTES = [
    {
      name: 'Movies',
      path: '/movies',
      component: <Movies/>,
    },
    {
      name: 'Movies',
      path: '/',
      component: <Movies/>,
    },
    {
      name: 'Series',
      path: '/series',
      component: <WebSeries/>,
    },

  ]
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <div className='container'>
     <Routes>
        { ROUTES.map((route, index) => (
           <Route key={index} path={route?.path} element={route?.component}></Route>
        ))}
     </Routes>
     </div>
     
    </>
  );
}

export default App;
