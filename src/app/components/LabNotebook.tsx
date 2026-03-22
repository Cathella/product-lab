import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

interface LabNotebookProps {
  date: string;
  time: string;
  entry: string;
  delay?: number;
}

export function LabNotebook({ date, time, entry, delay = 0 }: LabNotebookProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg shadow-sm font-mono text-sm"
    >
      <div className="flex items-center gap-4 mb-3 text-amber-700">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
        <span className="text-amber-600 font-bold">LOG:</span> {entry}
      </p>
    </motion.div>
  );
}
