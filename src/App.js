import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import DailySchedule from './components/DailySchedule/DailySchedule';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/daily' component={DailySchedule} />
        </main>
      </div>
    );
  }
}

export default App;
