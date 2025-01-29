"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft, Plus, Pencil } from "lucide-react";
import { Task } from "@/lib/interfaces/task";

const colors = [
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#92400E",
];

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

interface CreateTaskFormProps {
  handleCreateTask: (title: string, color: string) => void;
  setIsCreating: (value: boolean) => void;
  editingTask?: Task;
}

export const CreateTaskForm = ({
  handleCreateTask,
  setIsCreating,
  editingTask,
}: CreateTaskFormProps) => {
  const [selectedColor, setSelectedColor] = useState(
    editingTask?.color || colors[0]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editingTask?.title || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    handleCreateTask(values.title, selectedColor);
    form.reset();
    setIsCreating(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsCreating(false)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">
            {editingTask ? "Edit Task" : "Create Task"}
          </h2>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Brush your teeth"
                  className="bg-zinc-900 border-zinc-800"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <FormLabel>Color</FormLabel>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className={`w-8 h-8 rounded-full transition-transform ${
                  selectedColor === color ? "scale-125 ring-2 ring-white" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full gap-2 bg-blue-400 hover:bg-blue-500"
        >
          {editingTask ? (
            <Pencil className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          {editingTask ? "Save Task" : "Add Task"}
        </Button>
      </form>
    </Form>
  );
};
