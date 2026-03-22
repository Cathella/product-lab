import { motion } from 'motion/react';

export function EcosystemVisualization() {
  const nodes = [
    { id: 'access', x: 150, y: 100, label: 'ABA Access', color: '#3b82f6' },
    { id: 'partner', x: 450, y: 80, label: 'ABA Partner', color: '#22c55e' },
    { id: 'schoolist', x: 300, y: 250, label: 'Schoolist', color: '#a855f7' },
  ];

  const connections = [
    { from: 'access', to: 'partner', label: 'Partnerships' },
    { from: 'access', to: 'schoolist', label: 'Education' },
    { from: 'partner', to: 'schoolist', label: 'Collaboration' },
  ];

  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 350">
        {/* Connection lines */}
        {connections.map((conn, idx) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          
          return (
            <g key={idx}>
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
              />
              <motion.text
                x={midX}
                y={midY}
                textAnchor="middle"
                fill="#6b7280"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + idx * 0.2 }}
              >
                {conn.label}
              </motion.text>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="45"
              fill="white"
              stroke={node.color}
              strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={node.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.2 }}
            />
            <motion.text
              x={node.x}
              y={node.y + 65}
              textAnchor="middle"
              fill="#111827"
              fontSize="14"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
