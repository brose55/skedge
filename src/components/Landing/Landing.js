import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Get Organized!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your hobbies</h2>
        <p className="point-description">You know what you want to do, let us schedule it for you</p>
      </div>
      <div className="point">
        <h2 className="point-title">Daily and weekly schedules</h2>
        <p className="point-description">Plan for one day or a whole week, we've got you covered</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Plan your day from anywhere at any time</p>
      </div>
    </section>
  </section>
);

export default Landing;
