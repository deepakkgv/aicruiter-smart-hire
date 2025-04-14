
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import { FileText, VideoIcon, Shield, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                Transform Your Hiring Process with <span className="text-primary text-glow">AI</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 animate-slide-up animate-delay-100">
                AIcruiter automates interviews with natural AI conversations, removing bias and saving time in your recruitment workflow.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 animate-slide-up animate-delay-200">
                <Link to="/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Interview
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fade-in animate-delay-300">
              <div className="relative w-full max-w-md">
                <div className="aspect-video bg-black/40 rounded-lg backdrop-blur-sm border border-primary/20 overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <VideoIcon className="h-16 w-16 text-primary/75 animate-pulse-slow" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">How AIcruiter Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-100">
              Our streamlined process makes hiring efficient, consistent, and insightful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in animate-delay-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Upload</h3>
              <p className="text-muted-foreground">Upload your resume for intelligent parsing and analysis</p>
            </div>
            
            <div className="text-center animate-fade-in animate-delay-200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <VideoIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Interview</h3>
              <p className="text-muted-foreground">Complete a video interview with our AI interviewer</p>
            </div>
            
            <div className="text-center animate-fade-in animate-delay-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-muted-foreground">Review your performance with personalized feedback</p>
            </div>
            
            <div className="text-center animate-fade-in animate-delay-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Report</h3>
              <p className="text-muted-foreground">Hiring managers receive detailed assessment reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-100">
              AIcruiter combines advanced technologies to create a seamless interview experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in animate-delay-100">
              <FeatureCard 
                icon={FileText}
                title="Resume Parsing"
                description="Extract skills, experience, and projects automatically from your resume"
              />
            </div>
            <div className="animate-fade-in animate-delay-200">
              <FeatureCard 
                icon={VideoIcon}
                title="AI Video Interview"
                description="Natural conversation with our AI interviewer tailored to your resume"
              />
            </div>
            <div className="animate-fade-in animate-delay-300">
              <FeatureCard 
                icon={Shield}
                title="Anti-Cheat Monitoring"
                description="Advanced monitoring to ensure interview integrity and fairness"
              />
            </div>
            <div className="animate-fade-in animate-delay-300">
              <FeatureCard 
                icon={BarChart}
                title="Performance Analysis"
                description="Comprehensive scoring and feedback on your interview performance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Experience AI-Powered Interviews?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-100">
            Join thousands of candidates who have simplified their job application process with AIcruiter.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 animate-fade-in animate-delay-200">
              Start Your Interview Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
