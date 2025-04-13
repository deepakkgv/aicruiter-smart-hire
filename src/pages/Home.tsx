
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, VideoIcon, Shield, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="dark-theme min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center mb-4">
                <span className="accent-badge">AIcruiter</span>
              </div>
              <h1 className="section-title leading-tight">
                Artificial<br />
                Intelligence<br />
                Overview
              </h1>
              <div className="w-32 h-1 bg-[#FFB950]"></div>
              <div className="accent-badge inline-block">
                Navigating the Challenges of Machine Learning
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/interview">
                  <Button size="lg" className="accent-button flex items-center gap-2">
                    Start Interview
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src="/lovable-uploads/6eaffd08-da58-4798-9aeb-bb8cfc4f9ef4.png" 
                  alt="AI Technology" 
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <h3 className="stat-value">+200K</h3>
              <p className="stat-label">Successful Interviews</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">+450</h3>
              <p className="stat-label">Companies Using AIcruiter</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">98%</h3>
              <p className="stat-label">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80" 
                alt="Person working with technology" 
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="accent-badge">Introduction</div>
              <h2 className="text-3xl font-bold mb-4">Revolutionizing the Hiring Process</h2>
              <p className="text-gray-300">
                AIcruiter automates interviews with natural AI conversations, removing bias and saving time in your recruitment workflow. Our platform uses advanced machine learning algorithms to analyze responses and provide detailed candidate assessments.
              </p>
              <p className="text-gray-300">
                With AIcruiter, you can process more candidates in less time while ensuring a consistent and fair evaluation process for all applicants. Our technology adapts to different industries and job roles, providing customized interview experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
              <div className="accent-badge">The Next Generation of Technology</div>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Interview Experience</h2>
              <p className="text-gray-300">
                Our platform combines natural language processing, facial recognition, and behavioral analysis to create comprehensive candidate profiles. The system adapts in real-time based on candidate responses, creating a dynamic interview experience.
              </p>
              <p className="text-gray-300">
                Candidates interact with our lifelike AI interviewer through video, while our algorithms analyze responses for technical accuracy, communication skills, and problem-solving abilities.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Digital technology" 
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-badge inline-block mb-4">Our Company Values</div>
            <h2 className="text-3xl font-bold mb-4">What Makes AIcruiter Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="stat-card p-6">
              <h3 className="text-xl font-bold mb-2">Vision Statement</h3>
              <p className="text-gray-300">
                To create a world where hiring is efficient, fair, and insightful through the power of artificial intelligence, giving every candidate an equal opportunity to showcase their true potential.
              </p>
            </div>
            <div className="stat-card p-6">
              <h3 className="text-xl font-bold mb-2">Mission Directive</h3>
              <p className="text-gray-300">
                Revolutionizing the recruitment industry by providing cutting-edge AI solutions that remove human bias, increase efficiency, and deliver unprecedented insights into candidate capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered Interviews?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of candidates who have simplified their job application process with AIcruiter.
          </p>
          <Link to="/interview">
            <Button size="lg" className="accent-button">
              Start Your Interview Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
