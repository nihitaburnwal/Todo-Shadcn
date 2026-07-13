import { CheckCircle2 } from "lucide-react";

function Header() {
  return (
    <div>

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-blue-600 p-3 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Nihita's Todo
          </h1>

          <p className="mt-1 text-slate-500">
            Organize your tasks and stay productive.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Header;