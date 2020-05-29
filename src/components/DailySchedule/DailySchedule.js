import React, { Component } from 'react';
import SubjectList from '../SubjectList/SubjectList';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import HoursForm from '../HoursForm/HoursForm';
import Schedule from '../Schedule/Schedule';

class Daily_Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectInput: '',
      interest: 'passion',
      subjects: [
        {name: 'React', interest: 'Passion'},
        {name: 'Python', interest: 'Passion'}
      ],
      hoursAvailable: 0,
      schedule: [],
      submitted: false,
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
    e.preventDefault();
  }

  handleHoursSubmit = e => {
    let hours = this.state.hoursAvailable;
    let denom = this.state.subjects.length;
    let cut = hours/denom;
    let scheduleTemp = []
    this.state.subjects.map(subject => {
      let obj = {};
      obj['name'] = subject.name;
      obj['cut'] = cut;
      return scheduleTemp.push(obj);
    });
    this.setState({schedule: scheduleTemp})
    this.setState({submitted: true})
    e.preventDefault();
  }

  render() {
    const { subjects, subject, schedule, interest } = this.state;
    return (
      <div>
      {
        this.state.submitted ?
          <section className='daily-Schedule'>
            <Schedule schedule={schedule} />
          </section>
        :
          <section className='daily-info'>
            <SubjectList
              subjects={ subjects } />
            <HoursForm
              handleInputChange={this.handleInputChange}
              handleHoursSubmit={this.handleHoursSubmit} />
            <ScheduleForm
              subject={subject}
              interest={interest}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit} />
          </section>
      }
    </div>
    );
  }

}


export default Daily_Schedule;
