import { LucideIcon } from 'lucide-react';

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarMenuItem = ({ 
  icon: Icon, 
  label, 
  color, 
  isActive = false,
  onClick 
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

  return (
    <div 
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${colorClasses} ${
        isActive ? 'bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};