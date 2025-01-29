import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Task } from "@/lib/interfaces/task";

interface TaskHeadersProps {
  tasks: Task[];
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskHeaders = ({ tasks, setIsCreating }: TaskHeadersProps) => {
  return (
    <>
      <Button
        onClick={() => setIsCreating(true)}
        className="w-full py-6 text-lg bg-blue-400 hover:bg-blue-500"
      >
        Create Task
        <PlusIcon className="w-4 h-4 ml-2" />
      </Button>

      <div className="flex justify-between text-sm">
        <div className="text-blue-400">
          Tasks{" "}
          <span className="bg-zinc-900 px-2 py-1 rounded">{tasks.length}</span>
        </div>
        <div className="text-purple-400">
          Completed{" "}
          <span className="bg-zinc-900 px-2 py-1 rounded">
            {tasks.filter((t) => t.completed).length} of {tasks.length}
          </span>
        </div>
      </div>
    </>
  );
};
