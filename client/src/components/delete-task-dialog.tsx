import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface DeleteTaskDialogProps {
  confirmDelete: () => void;
}

export function DeleteTaskDialog({ confirmDelete }: DeleteTaskDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Trash2 className="text-zinc-400 hover:text-red-400" />
      </DialogTrigger>
      <DialogContent className="bg-stone-900 text-white">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this task?
        </DialogDescription>
        <DialogFooter>
          <Button
            onClick={confirmDelete}
            className="bg-red-400 hover:bg-red-600"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
