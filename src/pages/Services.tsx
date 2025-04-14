
import React from 'react';
import { FileText, VideoIcon, Shield, BarChart, FileBadge, Brain, Clock, Target, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm mb-2 animate-fade-in">COMPREHENSIVE SERVICES</span>
          <h1 className="text-4xl font-bold mb-4 animate-slide-up">Powerful AI Interview Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-100">
            AIcruiter offers a comprehensive suite of AI-powered services to transform your hiring process.
          </p>
        </div>

        {/* Resume Parsing Section */}
        <div className="mb-24 animate-fade-in animate-delay-200">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
            <div className="md:w-1/2">
              <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Resume Parsing & Role Matching</h2>
                <p className="text-muted-foreground mb-6">
                  Our advanced AI accurately extracts and analyzes key information from your resume, matching it to the role requirements with precision and intelligence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Experience Extraction</h4>
                      <p className="text-muted-foreground text-sm">Accurately identifies your years of experience in specific technologies and roles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Skills Identification</h4>
                      <p className="text-muted-foreground text-sm">Detects both explicit and implied skills from your work history and projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Project Analysis</h4>
                      <p className="text-muted-foreground text-sm">Evaluates the complexity and impact of your past projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Role-Specific Matching</h4>
                      <p className="text-muted-foreground text-sm">Uses advanced algorithms to determine your fit for specific positions</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/upload-resume">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Upload Your Resume <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Resume Analysis" 
                  className="rounded-lg shadow-2xl w-full h-auto relative z-10 border border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Interview Section */}
        <div className="mb-24 animate-fade-in animate-delay-300">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-10">
            <div className="md:w-1/2">
              <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md">
                <VideoIcon className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Real-time AI Video Interview</h2>
                <p className="text-muted-foreground mb-6">
                  Experience a natural conversation with our AI interviewer who asks personalized questions based on your resume and evaluates your responses in real-time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Animated AI Avatar</h4>
                      <p className="text-muted-foreground text-sm">Lifelike interviewer with natural expressions and voice</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Personalized Questions</h4>
                      <p className="text-muted-foreground text-sm">Questions tailored to your specific experience and the role</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Technical Assessment</h4>
                      <p className="text-muted-foreground text-sm">Role-specific technical questions to evaluate your expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Real-time Processing</h4>
                      <p className="text-muted-foreground text-sm">Advanced NLP to understand context and follow-up appropriately</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="AI Interview" 
                  className="rounded-lg shadow-2xl w-full h-auto relative z-10 border border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Anti-cheat Section */}
        <div className="mb-24 animate-fade-in animate-delay-300">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
            <div className="md:w-1/2">
              <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">Anti-cheat Monitoring & Behavior Analysis</h2>
                <p className="text-muted-foreground mb-6">
                  Our sophisticated system ensures interview integrity through advanced monitoring and behavioral analysis technologies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Malpractice Detection</h4>
                      <p className="text-muted-foreground text-sm">Identifies off-screen reading and other forms of assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Attention Monitoring</h4>
                      <p className="text-muted-foreground text-sm">Tracks engagement and focus throughout the interview</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Behavioral Analysis</h4>
                      <p className="text-muted-foreground text-sm">Analyzes non-verbal cues and speech patterns for authenticity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Environment Assessment</h4>
                      <p className="text-muted-foreground text-sm">Evaluates the appropriateness of the interview setting</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Anti-cheat Monitoring" 
                  className="rounded-lg shadow-2xl w-full h-auto relative z-10 border border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Scoring Section */}
        <div className="mb-24 animate-fade-in animate-delay-300">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-10">
            <div className="md:w-1/2">
              <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">AI Scoring & Interview Summary Reports</h2>
                <p className="text-muted-foreground mb-6">
                  Receive comprehensive performance analysis and actionable feedback after your interview to help you improve and succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Performance Ratings</h4>
                      <p className="text-muted-foreground text-sm">Detailed scores across technical knowledge, communication, and problem-solving</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Improvement Suggestions</h4>
                      <p className="text-muted-foreground text-sm">Personalized advice on how to strengthen your interview performance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Interview Transcript</h4>
                      <p className="text-muted-foreground text-sm">Complete record of your interview with highlighted key moments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Detailed PDF Reports</h4>
                      <p className="text-muted-foreground text-sm">Comprehensive assessment documents for both candidates and employers</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="AI Scoring" 
                  className="rounded-lg shadow-2xl w-full h-auto relative z-10 border border-primary/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-24 animate-fade-in animate-delay-300">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm mb-2">KEY ADVANTAGES</span>
            <h2 className="text-3xl font-bold mb-4">Why Choose AIcruiter?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers unique benefits that transform the traditional interview process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Time Efficient</h3>
              <p className="text-muted-foreground">Reduce hiring time by 70% with automated interviews available 24/7, any time, anywhere</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unbiased Assessment</h3>
              <p className="text-muted-foreground">Ensure fair evaluation with standardized AI-driven interviews that eliminate human biases</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileBadge className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-muted-foreground">Make informed decisions with comprehensive analytics that highlight strengths and areas for improvement</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-primary/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Adaptation</h3>
              <p className="text-muted-foreground">AI dynamically adjusts questions based on resume content and previous answers for personalized assessment</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 animate-fade-in animate-delay-300">
          <div className="bg-card rounded-xl border border-primary/20 shadow-lg p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Interview Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of candidates who have simplified their job application process with AIcruiter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/upload-resume">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Upload Your Resume
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
