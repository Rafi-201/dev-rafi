import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
}

export function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <div className="group relative flex items-center p-1 w-fit bg-white rounded-xl border border-gray-200 shadow-none transition duration-300 ease-in-out cursor-default lg:w-40"> {/* Added lg:w-50 */}
      {/* Icon Container */}
      <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg mr-2">
        <Icon className="w-4 h-4 text-gray-500" />
      </div>

      {/* Text */}
      <span className="text-xs font-normal text-gray-900 leading-4"> {/* Corrected to leading-5 */}
        {name}
      </span>

      {/* Hover Effect Overlay (unchanged) */}
      <div className="absolute inset-0 rounded-xl border border-gray-200 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:shadow-[0_2px_5px_0_rgb(0,0,0,0.15)]"></div>
    </div>
  );
}