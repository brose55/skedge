import React from 'react';
import { Link } from 'react-router-dom';

const HoursForm = ({ handleInputChange, handleHoursSubmit }) => {
  return (
    <form onSubmit={handleHoursSubmit}>
      <input
        type='number'
        name='hoursAvailable'
        onChange={handleInputChange} />
    <input
        type='submit'
        value='submit'
        className='w-30 grow f4 link ph3 pv2 dim' />
    </form>
  )
}

export default HoursForm;
