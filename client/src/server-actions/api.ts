"use server";
import { Task } from "@/lib/interfaces/task";

const BASE_URL = process.env.BACKEND_URL;

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
}

export async function createTask({
  title,
  color,
}: {
  title: string;
  color: string;
}): Promise<Task> {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, color }),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
}

export async function deleteTask(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
}

export async function toggleTaskComplete(id: string): Promise<Task> {
  const response = await fetch(`${BASE_URL}/tasks/${id}/toggle`, {
    method: "PATCH",
  });
  if (!response.ok) throw new Error("Failed to toggle task");
  return response.json();
}

export async function test() {
  const response = await fetch(`${BASE_URL}/test`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function updateTask({
  id,
  title,
  color,
}: {
  id: string;
  title: string;
  color: string;
}): Promise<Task> {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, color }),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
}
