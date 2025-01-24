# Do-It: Advanced Todo Application

A modern, feature-rich Todo application built with React and Redux, featuring authentication, dark mode, and task management capabilities.

## 🚀 Features

- **User Authentication**
  - Login/Signup functionality
  - Secure session management
  - Protected routes

- **Task Management**
  - Create, Read, Update, Delete (CRUD) operations
  - Task prioritization
  - Task completion tracking
  - Important task marking

- **UI/UX**
  - Dark/Light mode toggle
  - Responsive design
  - Clean and modern interface
  - Sidebar navigation

## 🛠️ Technologies Used

- React 18
- Redux Toolkit
- Redux Thunk
- React Router DOM
- Bootstrap
- Axios

## 📦 Installation

1. Clone the repository:

bash
git clone https://github.com/yourusername/do-it.git
cd do-it

2. Install dependencies:

bash
npm install

3. Create a .env file in the root directory:

bash
REACT_APP_API_URL=your_api_url
REACT_APP_ENV=development

4. Start the development server:

bash
npm start


## 🔧 Usage

### Authentication
1. Navigate to the login page
2. Use demo credentials or create a new account
3. Enable "Remember me" for persistent login

### Task Management
1. Add new tasks using the input field
2. Set priority and due date
3. Mark tasks as complete using the checkbox
4. Star important tasks using the star icon
5. Delete tasks using the delete button
6. Use bulk actions for multiple tasks

### Theme Customization
- Toggle dark/light mode using the theme button
- Customize sidebar visibility
- Adjust task view (list/grid)

## 📁 Project Structure


## 📚 API Documentation

### Authentication Endpoints
- POST /api/auth/login
- POST /api/auth/signup
- POST /api/auth/logout

### Task Endpoints
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id


