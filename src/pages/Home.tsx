
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import { FileText, VideoIcon, Shield, BarChart, Upload, ChartPieIcon, Brain, Cpu } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
                Transform Your Hiring Process with AI
              </h1>
              <p className="text-lg md:text-xl text-gray-300 animate-fade-in delay-200">
                AIcruiter automates interviews with natural AI conversations, removing bias and saving time in your recruitment workflow.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-full max-w-xl mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="AI Technology"
                  className="rounded-lg shadow-2xl animate-fade-in"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">How AIcruiter Works</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our streamlined process makes hiring efficient, consistent, and insightful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Resume Upload</h3>
              <p className="text-gray-400">Intelligent parsing and role matching</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI Interview</h3>
              <p className="text-gray-400">Dynamic, personalized interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <ChartPieIcon className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Dashboard</h3>
              <p className="text-gray-400">Comprehensive performance insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Admin Report</h3>
              <p className="text-gray-400">Detailed assessment reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Core Features</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              AIcruiter combines advanced technologies to revolutionize the interview process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Upload}
              title="Resume Upload & Parsing"
              description="Smart extraction of experience, skills, and projects"
              className="bg-gray-900/50 border border-gray-800"
            />
            <FeatureCard 
              icon={Brain}
              title="AI Video Interview"
              description="Real-time interaction with our AI interviewer"
              className="bg-gray-900/50 border border-gray-800"
            />
            <FeatureCard 
              icon={Shield}
              title="Anti-Cheat Monitoring"
              description="Advanced monitoring for interview integrity"
              className="bg-gray-900/50 border border-gray-800"
            />
            <FeatureCard 
              icon={Cpu}
              title="AI Analysis"
              description="Comprehensive scoring and detailed feedback"
              className="bg-gray-900/50 border border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Hiring Process?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of companies who have simplified their recruitment with AIcruiter.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
