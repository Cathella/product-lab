import { motion } from 'motion/react';
import { Circle } from 'lucide-react';

interface BuildingItemProps {
  text: string;
  delay?: number;
}

export function BuildingItem({ text, delay = 0 }: BuildingItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
    >
      <Circle className="w-2 h-2 mt-2 fill-blue-500 text-blue-500 flex-shrink-0" />
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </motion.div>
  );
}
