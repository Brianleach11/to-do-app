"use client";

import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  toggleTaskComplete,
  deleteTask,
  updateTask,
} from "@/server-actions/api";
import { CreateTaskForm } from "@/components/create-task-form";
import { Card } from "@/components/ui/card";
import { Task } from "@/lib/interfaces/task";
import { TaskCard } from "@/components/task-card";
import { TaskHeaders } from "@/components/task-headers";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleCreateTask = async (title: string, color: string) => {
    try {
      const newTask = await createTask({ title, color });
      setTasks([...tasks, newTask]);
      toast.success("Task created successfully");
      setIsCreating(false);
    } catch (err) {
      toast.error("Failed to create task");
      console.error("Failed to create task:", err);
    }
  };

  const handleToggleTask = async (id: string) => {
    try {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
      await toggleTaskComplete(id);
    } catch (err) {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
      console.error("Failed to toggle task:", err);
    }
  };

  const handleDeleteTask = async (id: string) => {
    const taskToDelete = tasks.find((t) => t.id === id)!;
    try {
      setTasks(tasks.filter((t) => t.id !== id));
      await deleteTask(id);
      toast.success("Task deleted successfully");
    } catch (err) {
      setTasks([...tasks, taskToDelete]);
      toast.error("Failed to delete task");
      console.error("Failed to delete task:", err);
    }
  };

  const handleEditTask = async (title: string, color: string) => {
    if (!editingTask) return;

    try {
      const updatedTask = await updateTask({
        id: editingTask.id,
        title,
        color,
      });
      setTasks(tasks.map((t) => (t.id === editingTask.id ? updatedTask : t)));
      toast.success("Task updated successfully");
      setEditingTask(undefined);
      setIsCreating(false);
    } catch (err) {
      toast.error("Failed to update task");
      console.error("Failed to update task:", err);
    }
  };

  const handleTaskClick = (task: Task) => {
    setEditingTask(task);
    setIsCreating(true);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl">🚀</span>
          <h1 className="text-3xl font-bold">
            <span className="text-blue-400">Todo</span>
            <span className="text-purple-400">App</span>
          </h1>
        </div>
        {isCreating ? (
          <CreateTaskForm
            handleCreateTask={editingTask ? handleEditTask : handleCreateTask}
            setIsCreating={setIsCreating}
            editingTask={editingTask}
          />
        ) : (
          <div className="flex flex-col gap-4 justify-center">
            <TaskHeaders tasks={tasks} setIsCreating={setIsCreating} />

            <div className="space-y-2">
              {tasks.length === 0 ? (
                <Card className="p-8 text-center bg-zinc-900 border-zinc-800">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl mb-2 text-zinc-400">
                    You don&apos;t have any tasks registered yet.
                  </h3>
                  <p className="text-zinc-400">
                    Create tasks and organize your to-do items.
                  </p>
                </Card>
              ) : (
                <div className="flex flex-col gap-4">
                  {tasks.filter((task) => !task.completed).map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      handleToggleTask={handleToggleTask}
                      handleDeleteTask={handleDeleteTask}
                    onEdit={handleTaskClick}
                    />
                  ))}
                  <Separator />
                  {tasks.filter((task) => task.completed).map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      handleToggleTask={handleToggleTask}
                      handleDeleteTask={handleDeleteTask}
                    onEdit={handleTaskClick}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
