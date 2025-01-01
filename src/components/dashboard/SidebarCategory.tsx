import { ChevronRight } from 'lucide-react';

interface SidebarCategoryProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export const SidebarCategory = ({
  title,
  children,
  isExpanded,
  onToggle,
}: SidebarCategoryProps) => {
  return (
    <div className="space-y-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <span className="text-xs tracking-wider">{title}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'transform rotate-90' : ''
          }`}
        />
      </button>
      <div
        className={`space-y-1 overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};