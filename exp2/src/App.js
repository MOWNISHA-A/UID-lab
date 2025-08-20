import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile
        name="Mownisha"
        email="mownisha.btech@example.com"
        location="Chennai, India"
        bio="I enjoy collaborating on tech projects, participating in hackathons, and exploring new frameworks. Always eager to learn and grow in the field of software engineering."
        avatar={process.env.PUBLIC_URL + '/1.jpg'}
        skills={["Java", "Python", "C++ (basic)", "Mobile App Development", "React", "UI/UX Design"]}
        interests={["Mobile Apps", "Tech Innovations", "Learning New Languages", "Open Source", "Hackathons"]}
        projects={["Student Attendance App", "Weather Dashboard", "Portfolio Website", "Quiz App", "Expense Tracker"]}
        achievements={["Won 2nd place in College Hackathon", "Completed Google Android Basics Nanodegree", "Built 5+ personal projects"]}
        quote="Strive not to be a success, but rather to be of value."
        education="B.Tech Information Technology, 3rd Year, Anna University"
      />
    </div>
  );
}

export default App;
