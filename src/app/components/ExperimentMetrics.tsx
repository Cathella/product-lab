import { motion } from 'motion/react';

interface ExperimentMetricsProps {
  label: string;
  value: number;
  unit: string;
  color: string;
  delay?: number;
}

export function ExperimentMetrics({ label, value, unit, color, delay = 0 }: ExperimentMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100"
    >
      <div className="flex items-center gap-3 mb-2">
        <div 
          className="w-3 h-3 rounded-full animate-pulse" 
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <motion.span 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          {value}
        </motion.span>
        <span className="text-lg text-gray-500 pb-1">{unit}</span>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
