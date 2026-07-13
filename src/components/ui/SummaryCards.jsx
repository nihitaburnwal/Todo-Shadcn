import { Card, CardContent } from "@/components/ui/card";
import {
  ListTodo,
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

function SummaryCards({ tasks }) {

  const totalTasks = tasks.length;

  const highPriority = tasks.filter(function (task) {
    return task.priority === "High";
  }).length;

  const dueTasks = tasks.filter(function (task) {
    return task.date !== "";
  }).length;

  const completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  const cards = [
    {
      title: "Total",
      value: totalTasks,
      icon: <ListTodo className="h-6 w-6" />,
      color: "bg-blue-100",
    },
    {
      title: "High",
      value: highPriority,
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-red-100",
    },
    {
      title: "Due",
      value: dueTasks,
      icon: <CalendarDays className="h-6 w-6" />,
      color: "bg-green-100",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

      {cards.map(function (card) {
        return (
          <Card
            key={card.title}
            className={`${card.color} border-0 shadow-sm`}
          >
            <CardContent className="flex items-center justify-between p-5">

              <div>

                <p className="text-sm text-slate-600">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

              </div>

              {card.icon}

            </CardContent>
          </Card>
        );
      })}

    </div>
  );
}

export default SummaryCards;