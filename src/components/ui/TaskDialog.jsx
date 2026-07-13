import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function TaskDialog({
  open,
  setOpen,
  addTask,
  updateTask,
  editTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setPriority(editTask.priority);
      setDate(editTask.date);
    } else {
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setDate("");
    }
  }, [editTask, open]);

  function handleSave() {
    if (title.trim() === "") {
      alert("Task title is required.");
      return;
    }

    const task = {
      title,
      description,
      priority,
      date,
      completed: editTask ? editTask.completed : false,
    };

    if (editTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDate("");

    setOpen();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            {editTask ? "Edit Task" : "Add New Task"}
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Task Title
            </label>

            <Input
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <Textarea
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Priority
              </label>

              <Select
                value={priority}
                onValueChange={setPriority}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="High">
                    High
                  </SelectItem>

                  <SelectItem value="Medium">
                    Medium
                  </SelectItem>

                  <SelectItem value="Low">
                    Low
                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Due Date
              </label>

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

            </div>

          </div>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={setOpen}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSave}
          >
            {editTask ? "Update Task" : "Save Task"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}

export default TaskDialog;