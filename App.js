import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes';
import userdata from './data/user.json';
import './styles/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const array = []; // Placeholder for your array
  const getSelectedMonthData = () => {}; // Placeholder for your function

  const mappedItems = array.map(item => {
    console.log(item);
    return null; // Explicitly return a value for each item
  });
  

  useEffect(() => {
    getSelectedMonthData(); // Ensure getSelectedMonthData is included in dependencies
  }, [getSelectedMonthData]);
  
  

  return (
    <Router>
      <div className='wrapper'>
        <div className="sidebar-container">
          <Sidebar user={userdata.user}></Sidebar>
        </div>
        <div className='section-container'>
          <Navbar />
          <div className="section-view">
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
