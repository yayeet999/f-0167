import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface SidebarCategoryProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export const SidebarCategory = ({ title, isExpanded, onToggle, children }: SidebarCategoryProps) => {
  return (
    <div className="cursor-pointer">
      <div
        className="flex items-center justify-between p-2 text-sm font-medium text-gray-500"
        onClick={onToggle}
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
      {isExpanded && <div className="ml-2">{children}</div>}
    </div>
  );
};