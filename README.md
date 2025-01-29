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

Clone both the repository:

```bash
git clone https://github.com/brianleach11/to-do-app.git
