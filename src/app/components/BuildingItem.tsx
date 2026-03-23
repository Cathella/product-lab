import { motion } from 'motion/react';
import { Square, CheckSquare } from 'lucide-react';

interface BuildingItemProps {
  text: string;
  delay?: number;
  checked?: boolean;
  onToggle?: () => void;
}

export function BuildingItem({ text, delay = 0, checked = false, onToggle }: BuildingItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onToggle}
      className="flex items-start gap-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors cursor-pointer"
    >
      {checked ? (
        <CheckSquare className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
      ) : (
        <Square className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
      )}
      <p className={`leading-relaxed ${checked ? 'text-gray-500 line-through' : 'text-gray-700'}`}>{text}</p>
    </motion.div>
  );
}
