import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
  to?: string;
  tooltip?: string;
}

export const SidebarMenuItem = ({ 
  icon: Icon, 
  label, 
  color, 
  isActive = false,
  onClick,
  to,
  tooltip
}: SidebarMenuItemProps) => {
  const colorClasses = {
    amber: 'text-amber-800 hover:bg-amber-50',
    purple: 'text-purple-800 hover:bg-purple-50',
    slate: 'text-slate-800 hover:bg-slate-50',
    cyan: 'text-cyan-800 hover:bg-cyan-50',
    green: 'text-green-800 hover:bg-green-50',
    fuchsia: 'text-fuchsia-800 hover:bg-fuchsia-50',
    gray: 'text-gray-800 hover:bg-gray-50',
    stone: 'text-stone-800 hover:bg-stone-50',
    yellow: 'text-yellow-800 hover:bg-yellow-50',
    orange: 'text-orange-800 hover:bg-orange-50',
    red: 'text-red-800 hover:bg-red-50',
    emerald: 'text-emerald-800 hover:bg-emerald-50',
    lime: 'text-lime-800 hover:bg-lime-50',
    zinc: 'text-zinc-800 hover:bg-zinc-50',
  }[color] || 'text-gray-800 hover:bg-gray-50';

  const content = (
    <>
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </>
  );

  const menuItem = to ? (
    <Link 
      to={to}
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${colorClasses} ${
        isActive ? 'bg-gray-50' : ''
      }`}
    >
      {content}
    </Link>
  ) : (
    <div 
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${colorClasses} ${
        isActive ? 'bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      {content}
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {menuItem}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return menuItem;
};