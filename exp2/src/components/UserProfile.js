import React from 'react';
import './UserProfile.css';

function UserProfile(props) {
  const {
    name,
    email,
    bio,
    avatar,
    skills = [],
    interests = [],
    projects = [],
    achievements = [],
    quote = '',
    location = '',
    education = '',
  } = props;

  const handleImgError = (e) => {
    e.target.src = 'https://via.placeholder.com/160?text=No+Image';
  };

  const bgStyle = {
    background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1100&q=80') center/cover no-repeat`,
    borderRadius: '24px',
    boxShadow: '0 4px 32px #4f8cff33',
    padding: '48px 32px',
    maxWidth: '1400px',
    margin: '40px auto',
    fontSize: '1.55em',
    animation: 'fadeIn 1.2s ease-in',
    color: '#111',
    backdropFilter: 'blur(2px)',
  };

  return (
    <div className="user-profile full-page" style={bgStyle}>
      <div className="profile-columns">
        <div className="profile-left">
          <img
            src={avatar}
            alt={name + ' avatar'}
            className="avatar large colorful"
            onError={handleImgError}
          />
          <h1 className="user-name big">{name}</h1>
          <p className="user-email">{email}</p>
          <p className="user-location">{location}</p>
          <blockquote className="user-quote">{quote}</blockquote>
          <p className="user-summary">
            3rd year B.Tech IT student with strong problem-solving skills and hands-on experience in full stack development. Skilled in Java, Python, and React, with interests in DSA and mobile app development. Passionate about building impactful applications and learning emerging technologies.
          </p>
        </div>
        <div className="profile-right">
          {/* Only bio, no summary here */}
          <p className="user-bio big">{bio}</p>
          <div className="profile-section">
            <h2>Education</h2>
            <p className="profile-education">{education}</p>
          </div>
          <div className="profile-section">
            <h2>Skills</h2>
            <ul className="profile-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="profile-section">
            <h2>Interests</h2>
            <ul className="profile-list">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="profile-section">
            <h2>Projects</h2>
            <ul className="profile-list">
              {projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
          <div className="profile-section">
            <h2>Achievements</h2>
            <ul className="profile-list">
              {achievements.map((ach) => (
                <li key={ach}>{ach}</li>
              ))}
            </ul>
          </div>
          <div className="profile-section">
            <h2>Contact</h2>
            <a href={`mailto:${email}`} className="contact-btn">
              Email Me
            </a>
          </div>
          <div className="profile-section">
            <h2>Social</h2>
            <div className="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
