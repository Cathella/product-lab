import { motion } from 'motion/react';
import { ConceptCard } from './components/ConceptCard';
import { BuildingItem } from './components/BuildingItem';
import { LabDecorations } from './components/LabDecorations';
import { ExperimentMetrics } from './components/ExperimentMetrics';
import { LabNotebook } from './components/LabNotebook';
import { Sparkles, Mail, Beaker, FlaskConical, TestTube2, Briefcase, FileText, User } from 'lucide-react';

export default function App() {
  const featuredConcepts = [
    {
      title: 'ABA Access',
      description: 'Helping families find trusted ABA therapy providers without the usual headache. Building trust into every step.',
      status: 'Testing the waters',
      color: 'blue' as const,
    },
    {
      title: 'ABA Partner',
      description: 'Making partnerships between therapy centers actually work smoothly. Less paperwork, more impact.',
      status: 'In the lab',
      color: 'green' as const,
    },
    {
      title: 'Schoolist',
      description: 'Reimagining how schools work in Africa — flexible, modern, and built for how we actually learn.',
      status: 'Early experiments',
      color: 'purple' as const,
    },
  ];

  const buildingItems = [
    'Figuring out how to make trust visible in digital marketplaces',
    'Testing ways to automate boring partnership workflows',
    'Playing with modular learning systems that adapt',
    'Making products that work for everyone, accessibility first',
    'Connecting systems that should talk to each other',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Floating lab decorations */}
      <LabDecorations />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#9ca3af" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Product Lab</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building digital products that{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                actually solve problems
              </span>
              {' '}—{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                one experiment at a time
              </span>
              .
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hey! I'm a product designer from Kampala, experimenting with ideas in access, partnerships, and education. Welcome to my digital lab.
            </p>
          </motion.div>

          {/* Floating concept cards preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.a
              href="#experience"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Work Experience</h3>
              <p className="text-sm text-gray-600">
                The projects I've worked on and what I learned
              </p>
            </motion.a>

            <motion.a
              href="#resume"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Resume</h3>
              <p className="text-sm text-gray-600">
                The formal stuff — if you need it
              </p>
            </motion.a>

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">About Me</h3>
              <p className="text-sm text-gray-600">
                Who I am, where I'm from, and what drives me
              </p>
            </motion.a>
          </div>
        </section>

        {/* Featured Concepts Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Concepts</h2>
              <p className="text-lg text-gray-600">
                Things I'm currently cooking up — trying to solve real problems, one prototype at a time
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredConcepts.map((concept, idx) => (
                <ConceptCard
                  key={concept.title}
                  title={concept.title}
                  description={concept.description}
                  status={concept.status}
                  color={concept.color}
                  delay={0.2 + idx * 0.15}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Ecosystem Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Lab Metrics</h2>
              </div>
              <p className="text-lg text-gray-600">
                How things are going — keeping it real with the progress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ExperimentMetrics 
                label="Concept Validation"
                value={73}
                unit="%"
                color="#3b82f6"
                delay={0.1}
              />
              <ExperimentMetrics 
                label="User Research"
                value={89}
                unit="%"
                color="#22c55e"
                delay={0.2}
              />
              <ExperimentMetrics 
                label="Development Phase"
                value={45}
                unit="%"
                color="#a855f7"
                delay={0.3}
              />
            </div>
          </motion.div>
        </section>

        {/* Lab Notebook Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-8 h-8 text-purple-600" />
                <h2 className="text-4xl font-bold text-gray-900">Lab Notebook</h2>
              </div>
              <p className="text-lg text-gray-600">
                Quick notes from the field — what's working, what's not
              </p>
            </div>

            <div className="space-y-4 max-w-4xl">
              <LabNotebook 
                date="Mar 18, 2026"
                time="14:32"
                entry="Found some friction in the provider verification flow. Testing new ways to show trust signals. Let's see how it goes."
                delay={0.1}
              />
              <LabNotebook 
                date="Mar 15, 2026"
                time="09:15"
                entry="Partnership prototype cutting manual work by 40%! Moving to beta. Small wins, but they add up."
                delay={0.2}
              />
              <LabNotebook 
                date="Mar 12, 2026"
                time="16:45"
                entry="User interviews were eye-opening. Schoolist needs a more flexible framework. Time to pivot the architecture."
                delay={0.3}
              />
            </div>
          </motion.div>
        </section>

        {/* What I'm Building Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What I'm Building</h2>
              <p className="text-lg text-gray-600">
                Random ideas and experiments I'm tinkering with right now
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {buildingItems.map((item, idx) => (
                <BuildingItem key={idx} text={item} delay={0.1 + idx * 0.1} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer / Closing Section */}
        <footer className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-t border-gray-200 mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Turning ideas into products,<br />one experiment at a time.
            </h3>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Let's chat
            </motion.button>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                © 2026 · Built with love from Kampala 🇺🇬
              </p>
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}