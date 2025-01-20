# React Form Validation App

A modern React application demonstrating form validation and user management with a clean UI.

## Features

- User registration form with real-time validation
- Password strength requirements:
  - Minimum 8 characters
  - At least one special character
  - At least one uppercase letter
  - Password confirmation matching
- Toast notifications for successful submissions
- User list display
- Responsive design with Tailwind CSS

## Tech Stack

- React.js
- Tailwind CSS
- React-toastify
- useState for state management

## Component Structure

- `App.jsx`: Main form component with validation logic
- `User.jsx`: Component to display registered users

## Form Validation Rules

The form implements the following validation:
- Required fields for name, email, and password
- Password complexity requirements
- Real-time error messaging
- Form data persistence using state management

## Styling

Uses Tailwind CSS for:
- Responsive layout
- Shadow effects
- Input focus states
- Custom button styling
- Error message formatting

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
