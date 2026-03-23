import { motion } from 'motion/react';
import { Beaker, FlaskConical, TestTube, Microscope, Activity } from 'lucide-react';

export function LabDecorations() {
  const floatingIcons = [
    { Icon: Beaker, x: '10%', y: '15%', delay: 0, rotate: -15, color: '#3b82f6', bgColor: '#dbeafe' },
    { Icon: FlaskConical, x: '85%', y: '20%', delay: 0.3, rotate: 10, color: '#a855f7', bgColor: '#f3e8ff' },
    { Icon: TestTube, x: '15%', y: '60%', delay: 0.6, rotate: -10, color: '#22c55e', bgColor: '#dcfce7' },
    { Icon: Microscope, x: '90%', y: '70%', delay: 0.9, rotate: 15, color: '#f59e0b', bgColor: '#fef3c7' },
    { Icon: Activity, x: '8%', y: '85%', delay: 1.2, rotate: -5, color: '#ec4899', bgColor: '#fce7f3' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ Icon, x, y, delay, rotate, color, bgColor }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.2, 0.35, 0.2],
            y: [0, -20, 0],
            rotate: [rotate, rotate + 5, rotate]
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: x,
            top: y,
          }}
        >
          {/* Background circle for cartoon effect */}
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{
              backgroundColor: bgColor,
              width: '80px',
              height: '80px',
              left: '-12px',
              top: '-12px',
            }}
          />
          {/* Main icon */}
          <Icon 
            className="w-14 h-14 relative z-10" 
            strokeWidth={1} 
            style={{ 
              color: color,
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
}