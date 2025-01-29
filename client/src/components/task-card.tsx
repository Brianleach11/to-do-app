import { Card } from "./ui/card";
import { Task } from "@/lib/interfaces/task";
import { DeleteTaskDialog } from "./delete-task-dialog";

interface TaskCardProps {
  task: Task;
  handleToggleTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  onEdit: (task: Task) => void;
}

export const TaskCard = ({
  task,
  handleToggleTask,
  handleDeleteTask,
  onEdit,
}: TaskCardProps) => {
  return (
    <Card
      key={task.id}
      className="p-4 flex items-center gap-4 bg-zinc-900 border-zinc-800 cursor-pointer hover:bg-zinc-800/50 transition-colors"
      onClick={() => onEdit(task)}
    >
      <button
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-white`}
        style={{ borderColor: task.color }}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleTask(task.id);
        }}
      >
        {task.completed && "✓"}
      </button>
      <span
        className={task.completed ? "line-through text-zinc-500" : "text-white"}
      >
        {task.title}
      </span>
      <div className="ml-auto" onClick={(e) => {e.stopPropagation()}}>
        <DeleteTaskDialog confirmDelete={() => handleDeleteTask(task.id)} />
      </div>
    </Card>
  );
};
