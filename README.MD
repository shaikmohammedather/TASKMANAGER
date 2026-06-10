# Task Management System

## Overview

A MERN Stack Task Management System with role-based authentication. The application allows Admins to create, update, view, and delete tasks, while Users can view their assigned tasks.

## Features

### Authentication

- User Registration
- User Login
- Admin Login
- JWT Authentication

### Admin Features

- Create Task
- View All Tasks
- Update Task
- Delete Task

### User Features

- View Assigned Tasks

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

### Frontend

- React.js
- Axios
- React Router DOM

## Project Structure

TASKMANAGER/
├── backend/
├── frontend/
├── postman/
└── README.md

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a .env file inside the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Tasks

- POST /api/task/task
- GET /api/task/task
- PUT /api/task/task/:id
- DELETE /api/task/task/:id
- GET /api/task/userTasks

## Postman Collection

The Postman collection is available in the postman folder.

## Author

Shaik Mohammed Ather
