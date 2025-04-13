
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import { FileText, VideoIcon, Shield, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Hiring Process with AI
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                AIcruiter automates interviews with natural AI conversations, removing bias and saving time in your recruitment workflow.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/interview">
                  <Button size="lg" className="bg-white text-aicruiter-green hover:bg-gray-100">
                    Start Interview
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-video bg-green-800/20 rounded-lg backdrop-blur-sm border border-white/20 overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoIcon className="h-16 w-16 text-white/75 animate-pulse-slow" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-aicruiter-lightgreen/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-aicruiter-gold/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How AIcruiter Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes hiring efficient, consistent, and insightful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-aicruiter-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Upload</h3>
              <p className="text-gray-600">Upload your resume for intelligent parsing and analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 relative">
                <VideoIcon className="h-8 w-8 text-aicruiter-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Interview</h3>
              <p className="text-gray-600">Complete a video interview with our AI interviewer</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-aicruiter-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-600">Review your performance with personalized feedback</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-aicruiter-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Report</h3>
              <p className="text-gray-600">Hiring managers receive detailed assessment reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AIcruiter combines advanced technologies to create a seamless interview experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={FileText}
              title="Resume Parsing"
              description="Extract skills, experience, and projects automatically from your resume"
            />
            <FeatureCard 
              icon={VideoIcon}
              title="AI Video Interview"
              description="Natural conversation with our AI interviewer tailored to your resume"
            />
            <FeatureCard 
              icon={Shield}
              title="Anti-Cheat Monitoring"
              description="Advanced monitoring to ensure interview integrity and fairness"
            />
            <FeatureCard 
              icon={BarChart}
              title="Performance Analysis"
              description="Comprehensive scoring and feedback on your interview performance"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-aicruiter-green py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered Interviews?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of candidates who have simplified their job application process with AIcruiter.
          </p>
          <Link to="/interview">
            <Button size="lg" className="bg-white text-aicruiter-green hover:bg-gray-100">
              Start Your Interview Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
