import React, { Component } from 'react';
import Schedule from '../Schedule/Schedule';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

class Daily_Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectInput: '',
      interest: 'passion',
      subjects: [
        {name: 'React', interest: 'Passion'},
        {name: 'Python', interest: 'Python'}
      ]
    }
  }

  handleInputChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit = e => {
    let newSubject = {};
    newSubject.name=this.state.subjectInput;
    newSubject.interest=this.state.interest;
    let currentSubjects = this.state.subjects;
    currentSubjects.push(newSubject);
    this.setState({ subjects: currentSubjects })
    console.log(currentSubjects);
    e.preventDefault();
  }

  render() {
    return (
      <section className='daily-schedule'>
        <Schedule
          subjects={ this.state.subjects } />
        <ScheduleForm
          subject={this.state.subject}
          interest={this.state.interest}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }

}


export default Daily_Schedule;
