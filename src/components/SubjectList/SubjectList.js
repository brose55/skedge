import React from 'react';
import './SubjectList.css';

const SubjectList = (props: ComponentProps) => {
  return (
    <div>
      <p>Today's subjects are: </p>
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

export default SubjectList;
