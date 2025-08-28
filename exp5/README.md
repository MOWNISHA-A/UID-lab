##Counter Application (React)
#📌 Project Overview

This is a simple Counter Application built using React.
The app allows users to increment, decrement, and reset a counter.
Additionally, it keeps track of the history of actions performed (e.g., "Incremented by 1", "Decremented by 1", "Reset to 0") and displays it at the bottom of the app.

#🚀 Features

Increment Counter ➝ Increases the counter value by 1.

Decrement Counter ➝ Decreases the counter value by 1.

Reset Counter ➝ Resets the counter value back to 0.

Action History ➝ Logs all the actions performed and displays them in order.

#🛠️ React Features Used

This project demonstrates the following React concepts:

1.Functional Components

The entire app is written using React functional components instead of class components.

2.React Hooks (useState)

useState is used to:

Maintain the counter state (count).

Keep a history of actions (history).

3.Event Handling in React

Button clicks (onClick) are handled using functions (handleIncrement, handleDecrement, handleReset).

4.Dynamic Rendering

The current count and action history are dynamically updated and displayed whenever the state changes.

5.Conditional Rendering & Lists

The history is displayed using .map() to loop through the array and render each log item.

6.Inline Styling in React

The app uses inline styles to make the UI simple and visually attractive without external CSS.