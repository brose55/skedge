import React from 'react';

const Schedule = (props: ComponentProps) => {
  return (
    <div>
      <p>Today's subjects are: </p>
      <ul>
        {
          props.schedule.map((subject, index) =>
            <li key={index}>{subject.name} for {subject.cut} hours</li>
          )
        }
      </ul>
    </div>
  )
}

export default Schedule;
