# React Props Description for UserProfile Component

## What are Props?
Props (short for "properties") are a way to pass data from a parent component to a child component in React. They make components reusable and dynamic.

## Props Used in UserProfile

| Prop Name    | Type     | Description                                                                 |
|--------------|----------|-----------------------------------------------------------------------------|
| name         | string   | The user's full name                                                         |
| email        | string   | The user's email address                                                     |
| bio          | string   | A short biography or description                                             |
| avatar       | string   | URL or path to the user's profile image                                      |
| location     | string   | The user's location (city, country, etc.)                                    |
| education    | string   | Education details                                                            |
| quote        | string   | A favorite quote or motto                                                    |
| skills       | array    | List of skills (e.g., Java, Python, React)                                   |
| interests    | array    | List of interests (e.g., Mobile Apps, Tech Innovations)                      |
| projects     | array    | List of projects (e.g., Portfolio Website, Quiz App)                         |
| achievements | array    | List of achievements (e.g., Hackathon winner, certifications)                |

## Example Usage
```jsx
<UserProfile
  name="Mownisha"
  email="mownisha.btech@example.com"
  bio="Currently a 3rd year B.Tech IT student. Proficient in Java and Python, with basic knowledge of C++. Passionate about mobile app development and always eager to learn new technologies."
  avatar={process.env.PUBLIC_URL + '/1.jpg'}
  location="Chennai, India"
  education="B.Tech Information Technology, 3rd Year, Anna University"
  quote="Strive not to be a success, but rather to be of value."
  skills={["Java", "Python", "C++ (basic)", "Mobile App Development", "React", "UI/UX Design"]}
  interests={["Mobile Apps", "Tech Innovations", "Learning New Languages", "Open Source", "Hackathons"]}
  projects={["Student Attendance App", "Weather Dashboard", "Portfolio Website", "Quiz App", "Expense Tracker"]}
  achievements={["Won 2nd place in College Hackathon", "Completed Google Android Basics Nanodegree", "Built 5+ personal projects"]}
/>
```

## Why Use Props?
- Props make components flexible and reusable.
- You can display different data by changing the props.
- They help organize and manage data in your React app.
