# React Todo List Application

A simple and elegant todo list application built with React hooks. This app demonstrates modern React development practices using functional components and hooks for state management.

## Features

- ✅ Add new todos
- ✏️ Edit existing todos (double-click or use edit button)
- ✅ Mark todos as complete/incomplete
- 🗑️ Delete todos
- 📊 Filter todos (All, Active, Completed)
- 📈 Todo statistics (active and completed count)
- 🧹 Clear all completed todos
- 💾 Persistent storage using localStorage
- 📱 Responsive design for mobile and desktop
- ⚡ Built with modern React hooks (useState, useEffect, useRef)

## React Hooks Used

- **useState**: For managing component state (todos, input values, filters)
- **useEffect**: For side effects (localStorage operations, focus management)
- **useRef**: For direct DOM access (focusing edit inputs)

## Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Application styles
├── TodoItem.js     # Individual todo item component
└── index.js        # React app entry point

public/
└── index.html      # HTML entry point
```

## Installation & Setup

1. Make sure you have Node.js installed (v14 or higher)
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Usage

1. **Add a todo**: Type in the input field and click "Add Todo" or press Enter
2. **Edit a todo**: Double-click on the todo text or click the edit (✏️) button
3. **Complete a todo**: Click the checkbox next to the todo
4. **Delete a todo**: Click the delete (🗑️) button
5. **Filter todos**: Use the filter buttons to show All, Active, or Completed todos
6. **Clear completed**: Click "Clear Completed" to remove all completed todos

## Technical Details

- **State Management**: Uses React's useState hook for local component state
- **Persistence**: Todos are automatically saved to and loaded from localStorage
- **Responsive**: CSS Grid and Flexbox for responsive layout
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Performance**: Efficient re-rendering with proper key props and state structure

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## License

This project is open source and available under the MIT License.