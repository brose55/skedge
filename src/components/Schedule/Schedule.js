import React from 'react';
import './Schedule.css';

const Schedule = (props: ComponentProps) => {
  return (
    <div>
      <p>Your current schedule is: </p>
      <ul>
        {
          props.subjects.map( (subject, index) =>
            <li key={index}>{subject.name} is a: {subject.interest}</li>
          )
        }
      </ul>
    </div>
  );
}

export default Schedule;
