import React from 'react';

const ScheduleForm = ({ handleInputChange, handleSubmit, subjectInput, interest }) => {
  return (
    <div className='pa3'>
      <p className='f3'>Add subjects here!</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='subjectInput'
          value={subjectInput}
          onChange={handleInputChange}/>
        <label>
          Interest Level:
          <select
            name='interest'
            value={interest} onChange={handleInputChange}>
            <option value="passion">Passion</option>
            <option value="hobby">Hobby</option>
            <option value="interest">Interest</option>
          </select>
        </label>
        <input
          type='submit'
          value='submit'
          className='w-30 grow f4 link ph3 pv2 dim' />
      </form>
    </div>
  )
}

export default ScheduleForm;
