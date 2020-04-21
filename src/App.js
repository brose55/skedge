import React, { Component } from 'react';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Schedule />
        <ScheduleForm />
      </div>
    );
  }
}

export default App;
