# Fullstack Todo List App

This is a full-stack Todo List application built using **Next.js** (front-end), **Express.js** (back-end), **Prisma** (ORM), and **MySQL** (database). The app allows users to create, edit, mark as completed, and delete tasks. The front-end is styled using **Tailwind CSS**, and the entire project is written in **TypeScript**.

---

## Features

- **Home View**:
  - Display a list of tasks with a title, completion status, and delete button.
  - Summary of tasks: "Tasks: X" and "Completed: Y of X".
  - Navigate to the **Edit Task Page** by clicking on a task.
- **Create/Edit Task Page**:
  - Form to add or edit a task with a title and color selection.
  - Save changes and redirect to the Home View.
- **Additional Features**:
  - Toggle task completion status directly from the Home View.
  - Delete tasks with a confirmation prompt.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MySQL** (running locally or remotely)
- **Git** (for cloning the repositories)

---

## Setup Instructions

### 1. Clone the Repositories

Clone the repository:

```bash
git clone https://github.com/BrianLeach11/to-do-app.git
```

Then navigate to the new directory:

```bash
cd to-do-app
```

### 2. Install Dependencies

Navigate to the client directory and install the dependencies:

```bash
cd client
npm install
```

Navigate to the server directory and install the dependencies:

```bash
cd server
npm install
```

### 3. Set Up MySQL

Ensure your MySQL server is running and create a new database named `todo-app`.

MySQL documentation: https://dev.mysql.com/doc/mysql-getting-started/en/

In the terminal (mac-os):

```bash
mysql -u root
or
mysql -u root -p [password]
```

```bash
CREATE DATABASE todo-app;
SHOW DATABASES;
```

### 4. Configure Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```bash
DATABASE_URL=mysql://your_username:your_password@localhost:3306/todo-app
```

This is what mine was as I didn't have a password:

```bash
DATABASE_URL=mysql://root:@localhost:3306/todo-app
```

Create a `.env` file in the `client` directory with the following variables:

```bash
BACKEND_URL=http://localhost:8000
```

### 5. Initialize Prisma and Create Database Tables

Navigate to the server directory and run the following commands to set up Prisma and create the database tables:

```bash
cd server
npx prisma generate
npx prisma migrate dev --name init
```

This will:
1. Generate the Prisma Client
2. Create the database table based on the schema (server/prisma/schema.prisma)
3. Apply all migrations

### 6. Run the Application

Start the development server:

```bash
cd server
npm run dev
```

In a new terminal, navigate to the client directory and start the development server:

```bash
cd client
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.
