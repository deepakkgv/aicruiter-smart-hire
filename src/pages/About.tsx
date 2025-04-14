
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BrainCircuit, 
  FileText, 
  VideoIcon, 
  Shield, 
  BarChart, 
  Lightbulb, 
  Zap,
  CheckCircle2
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About AIcruiter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIcruiter is revolutionizing the hiring process with our cutting-edge AI-powered interview platform. 
            We provide a complete end-to-end solution from resume parsing to detailed candidate assessment.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-20 bg-gradient-to-r from-aicruiter-blue/10 to-aicruiter-teal/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're on a mission to transform the traditional hiring process by eliminating bias, 
                saving time, and providing detailed insights for both candidates and recruiters. 
                Our AI-driven approach ensures a fair, efficient, and informative experience for everyone involved.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-aicruiter-blue mr-2 mt-1 flex-shrink-0" />
                  <p>Eliminate hiring bias</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-aicruiter-blue mr-2 mt-1 flex-shrink-0" />
                  <p>Reduce time-to-hire by 70%</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-aicruiter-blue mr-2 mt-1 flex-shrink-0" />
                  <p>Enhance candidate experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-aicruiter-blue mr-2 mt-1 flex-shrink-0" />
                  <p>Provide data-driven insights</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="AI Hiring Team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Our End-to-End Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our End-to-End Interview Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aicruiter-blue/10 rounded-bl-full"></div>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-aicruiter-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">1. Smart Resume Analysis</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our AI system analyzes and extracts key information from resumes, including skills, experience, 
                projects, and qualifications. This forms the foundation for a personalized interview experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Automatic skill extraction</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Experience verification</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Role-based matching</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aicruiter-blue/10 rounded-bl-full"></div>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <VideoIcon className="h-8 w-8 text-aicruiter-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">2. AI-Powered Interviews</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our state-of-the-art AI interviewer conducts realistic, engaging interviews tailored to each 
                candidate's resume and the specific role. The system adapts questions based on responses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Human-like conversation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Adaptive questioning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Technical & behavioral assessment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aicruiter-blue/10 rounded-bl-full"></div>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-aicruiter-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">3. Anti-Cheat Monitoring</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our platform ensures interview integrity through sophisticated monitoring that detects potential 
                cheating while maintaining a comfortable experience for honest candidates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Eye movement tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Audio environment analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Behavioral anomaly detection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-aicruiter-blue/10 rounded-bl-full"></div>
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-aicruiter-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">4. Comprehensive Assessment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                After the interview, our AI generates detailed reports with scoring and analysis of the candidate's 
                performance across multiple dimensions, providing actionable insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Multi-dimensional scoring</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Personality insights</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Detailed performance breakdown</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Behind AIcruiter */}
        <div className="mb-20 bg-gradient-to-r from-aicruiter-blue/10 to-aicruiter-teal/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Technology Behind AIcruiter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BrainCircuit className="h-12 w-12 text-aicruiter-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
              <p className="text-gray-700">
                Our platform utilizes state-of-the-art large language models and computer vision technology to 
                analyze responses, detect nuances, and provide comprehensive assessments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Lightbulb className="h-12 w-12 text-aicruiter-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-700">
                The system continuously learns from interactions, improving its ability to ask relevant questions 
                and provide more accurate assessments over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Zap className="h-12 w-12 text-aicruiter-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-700">
                Our infrastructure enables real-time response analysis and dynamic question generation, creating a 
                seamless and responsive interview experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of companies already using AIcruiter to find the perfect candidates efficiently and effectively.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/interview">
              <Button size="lg" className="bg-aicruiter-blue hover:bg-blue-700">
                Start Your First Interview
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
