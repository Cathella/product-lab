import { useState } from 'react';
import { motion } from 'motion/react';
import { ConceptCard } from './components/ConceptCard';
import { BuildingItem } from './components/BuildingItem';
import { LabDecorations } from './components/LabDecorations';
import { ExperimentMetrics } from './components/ExperimentMetrics';
import { LabNotebook } from './components/LabNotebook';
import { Sparkles, Mail, Beaker, FlaskConical, TestTube2, Briefcase, FileText, User, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

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

  const [buildingItems, setBuildingItems] = useState([
    { text: 'Figuring out how to make trust visible in digital marketplaces', checked: true },
    { text: 'Testing ways to automate boring partnership workflows', checked: false },
    { text: 'Playing with modular learning systems that adapt', checked: true },
    { text: 'Making products that work for everyone, accessibility first', checked: false },
    { text: 'Connecting systems that should talk to each other', checked: false },
  ]);

  const toggleBuildingItem = (index: number) => {
    setBuildingItems(prev => prev.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="min-h-screen bg-[#E4F1D7] relative overflow-hidden">
      {/* Floating lab decorations */}
      <LabDecorations />
      
      {/* Subtle grid lines with dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px), radial-gradient(circle, #9ca3af 1px, transparent 1.5px)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 0, 0 0'
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
            {/* Photo carousel - moves right to left infinitely, stops on hover */}
            <div className="relative mb-12 flex justify-center">
              <div className="max-w-[70%] p-2 overflow-hidden">
                <div
                  className="flex gap-6 animate-scroll"
                  style={{ width: "fit-content" }}
                >
                  {/* Photo 1 - Yellow shirt - San Francisco */}
                  <div className="relative flex-shrink-0 rotate-3 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      San Francisco
                    </div>
                  </div>
                  {/* Photo 2 - Green shirt - New York */}
                  <div className="relative flex-shrink-0 -rotate-2 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      New York
                    </div>
                  </div>
                  {/* Photo 3 - Blue shirt - London */}
                  <div className="relative flex-shrink-0 rotate-2 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 3" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      London
                    </div>
                  </div>
                  {/* Duplicate for seamless loop */}
                  {/* Photo 1 - Yellow shirt - San Francisco */}
                  <div className="relative flex-shrink-0 rotate-3 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      San Francisco
                    </div>
                  </div>
                  {/* Photo 2 - Green shirt - New York */}
                  <div className="relative flex-shrink-0 -rotate-2 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      New York
                    </div>
                  </div>
                  {/* Photo 3 - Blue shirt - London */}
                  <div className="relative flex-shrink-0 rotate-2 rounded-none border-6 border-white group">
                    <div className="w-40 h-56 md:w-48 md:h-72 overflow-hidden rounded-none">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                        alt="Photo 3" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1 whitespace-nowrap">
                      <MapPin className="w-3 h-3" />
                      London
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2  px-4 py-2 bg-white mb-4 rounded-full shadow-sm border border-gray-200">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Product Laboratory</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Real problems. <br />Thoughtful products.
            </h1>
            
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              I build digital products in Kampala, Uganda - <br/>exploring better access, connected healthcare, and education. <br />Welcome to my lab!
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
              className="bg-white p-6 shadow-lg cursor-pointer group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">Work Experience</h3>
                <p className="text-sm text-gray-600">
                  The projects I've worked on and what I learned
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
            </motion.a>

            <motion.a
              href="#resume"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-white p-6 shadow-lg cursor-pointer group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">Resume</h3>
                <p className="text-sm text-gray-600">
                  The formal stuff — if you need it
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
            </motion.a>

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className="bg-white p-6 shadow-lg cursor-pointer group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">About Me</h3>
                <p className="text-sm text-gray-600">
                  Who I am, where I'm from, and what drives me
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Concepts</h2>
              <p className="text-base text-gray-600">
                Things I'm currently cooking up - trying to solve real problems, one prototype at a time
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
              <div className="flex items-center gap-3 mb-2">
                <Beaker className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Lab Metrics</h2>
              </div>
              <p className="text-base text-gray-600">
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
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Lab Notebook</h2>
              </div>
              <p className="text-base text-gray-600">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-2">What I'm Building</h2>
              <p className="text-base text-gray-600">
                Random ideas and experiments I'm tinkering with right now
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm px-6 py-2 max-w-2xl">
              {buildingItems.map((item, idx) => (
                <BuildingItem key={idx} text={item.text} checked={item.checked} delay={0.1 + idx * 0.1} onToggle={() => toggleBuildingItem(idx)} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer / Closing Section */}
        <footer className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 mt-17 border-t border-gray-500">
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

            <div className="mt-16">
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