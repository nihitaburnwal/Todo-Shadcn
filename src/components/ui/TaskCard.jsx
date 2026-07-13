import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  CalendarDays,
  Pencil,
  Trash2,
} from "lucide-react";

function TaskCard({
  task,
  index,
  deleteTask,
  openEdit,
  toggleComplete,
}) {
  function getBadgeVariant() {
    if (task.priority === "High") {
      return "destructive";
    }

    if (task.priority === "Medium") {
      return "secondary";
    }

    return "outline";
  }

  return (
    <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all">
      <CardContent className="p-6">

        <div className="flex items-start gap-4">

          <Checkbox
            checked={task.completed}
            onCheckedChange={() => toggleComplete(index)}
            className="mt-1"
          />

          <div className="flex-1">

            <div className="flex items-start justify-between">

              <div>

                <h2
                  className={`text-xl font-bold ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-slate-800"
                  }`}
                >
                  {task.title}
                </h2>

                <p
                  className={`mt-2 ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-slate-500"
                  }`}
                >
                  {task.description || "No description added."}
                </p>

              </div>

              <Badge variant={getBadgeVariant()}>
                {task.priority}
              </Badge>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

              <CalendarDays className="h-4 w-4" />

              <span>
                {task.date || "No Due Date"}
              </span>

            </div>

            <div className="mt-6 flex justify-end gap-3">

              <Button
                variant="outline"
                size="sm"
                onClick={() => openEdit(index)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteTask(index)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>

            </div>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}

export default TaskCard;