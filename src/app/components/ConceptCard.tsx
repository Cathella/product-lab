import { motion } from 'motion/react';
import { StatusBadge } from './StatusBadge';
import { ArrowRight } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  status: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  delay?: number;
  variant?: 'default' | 'floating';
}

export function ConceptCard({ 
  title, 
  description, 
  status, 
  color, 
  delay = 0,
  variant = 'default'
}: ConceptCardProps) {
  const floatingClass = variant === 'floating' 
    ? 'transform -rotate-2 hover:rotate-0' 
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group relative bg-white rounded-0 p-8 shadow-lg hover:shadow-lg transition-all duration-300 ${floatingClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="mb-4">
          <StatusBadge status={status} color={color} />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-gray-900">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <button className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all duration-300 text-sm">
          View Concept
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
