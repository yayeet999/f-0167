import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  color?: string;
  to?: string;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
  onClick?: () => void;
}

export const SidebarMenuItem = ({
  icon: Icon,
  label,
  color = 'gray',
  to,
  isActive,
  tooltip,
  className = '',
  onClick,
}: SidebarMenuItemProps) => {
  const baseClasses = `
    flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg
    transition-all duration-200
    ${isActive 
      ? `bg-${color}-50 text-${color}-900` 
      : 'text-gray-700 hover:text-gray-900'
    }
    ${className}
  `;

  const content = (
    <>
      <Icon className={`w-4 h-4 ${isActive ? `text-${color}-600` : 'text-gray-500'}`} />
      <span>{label}</span>
    </>
  );

  const menuItem = to ? (
    <Link to={to} className={baseClasses}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {menuItem}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return menuItem;
};