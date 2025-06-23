import React from 'react';
import profileImage from '../assets/my_image.jpg'; // adjust path if needed

export default function Home() {
  const achievements = [
    {
      title: 'Top 1% in LeetCode',
      description: 'Ranked among top 1% in LeetCode global rankings with 500+ problems solved.'
    },
    {
      title: 'Security CTF Winner',
      description: 'Won first place in a Capture The Flag security contest organized by XYZ.'
    },
    {
      title: 'Speaker at Security Conference',
      description: 'Spoke at DEFCON conference about Full Stack App Security best practices.'
    }
  ];

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Side: Info */}
        <div className="col-md-7">
          <h1 className="mb-4">Welcome Recruiters!</h1>
          <p className="lead">
            I graduated from <strong>IIT Tirupati</strong> with <strong>8.8 CGPA</strong> in CSE.
            Currently, I work at <strong>ServiceNow</strong> as a Full Stack Compliance Engineer with 2 years of experience.
          </p>
          <p className="lead text-danger">
            I have a deep interest in cybersecurity — look for hidden clues across the site!
          </p>
          <p className="lead">
            Explore my projects via the <span className="text-primary">Projects</span> tab. To contact me, visit the <span className="text-primary">Contact</span> page.
          </p>

          {/* Achievements Section */}
          <h2 className="mt-5 mb-3">Achievements</h2>
          <div className="row">
            {achievements.map((achieve, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{achieve.title}</h5>
                    <p className="card-text">{achieve.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Fixed Image */}
        <div className="col-md-5 d-none d-md-block position-relative">
          <img
            src={profileImage}
            alt="Profile"
            className="position-fixed end-0 top-50 translate-middle-y me-4"
            style={{ width: '300px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          />
        </div>
      </div>
    </div>
  );
}
