import React from 'react';

const ScheduleForm = () => {
  return (
    <div className='pa3'>
      <p className='f3'>Add subjects here!</p>
      <div>
        <input type='text' className='f4 pa2 w-70 center' />
        <button className='w-30 grow f4 link ph3 pv2 dim'>Detect</button>
      </div>
    </div>
  )
}

export default ScheduleForm;
