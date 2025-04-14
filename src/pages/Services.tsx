
import React from 'react';
import { FileText, VideoIcon, Shield, BarChart, FileBadge, Brain, Clock, Target } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIcruiter offers a comprehensive suite of AI-powered services to transform your hiring process.
          </p>
        </div>

        {/* Resume Parsing Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl">
                <FileText className="h-12 w-12 text-aicruiter-blue mb-4" />
                <h2 className="text-2xl font-bold mb-3">Resume Parsing & Role Matching</h2>
                <p className="text-gray-700 mb-4">
                  Our advanced AI accurately extracts and analyzes key information from your resume, matching it to the role requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Years of experience extraction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Contact information verification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Skill and project identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Role-specific matching algorithms</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Resume Analysis" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* AI Interview Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl">
                <VideoIcon className="h-12 w-12 text-aicruiter-blue mb-4" />
                <h2 className="text-2xl font-bold mb-3">Real-time AI Video Interview</h2>
                <p className="text-gray-700 mb-4">
                  Experience a natural conversation with our female AI interviewer who asks personalized questions based on your resume.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Animated AI avatar for human-like interaction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Resume-driven personalized questions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Technical questions matched to the role</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Real-time speech processing and understanding</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="AI Interview" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Anti-cheat Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl">
                <Shield className="h-12 w-12 text-aicruiter-blue mb-4" />
                <h2 className="text-2xl font-bold mb-3">Anti-cheat Monitoring & Behavior Analysis</h2>
                <p className="text-gray-700 mb-4">
                  Our system ensures interview integrity through advanced monitoring and behavioral analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Malpractice detection (reading off screen)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Attention level monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Behavioral cue analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Interview environment assessment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Anti-cheat Monitoring" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* AI Scoring Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-10">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-xl">
                <BarChart className="h-12 w-12 text-aicruiter-blue mb-4" />
                <h2 className="text-2xl font-bold mb-3">AI Scoring & Interview Summary Reports</h2>
                <p className="text-gray-700 mb-4">
                  Get comprehensive performance analysis and actionable feedback after your interview.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Performance ratings across key areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Skill-wise improvement suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Complete interview transcript</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span>Detailed PDF reports for admin</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="AI Scoring" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AIcruiter?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-aicruiter-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Efficient</h3>
              <p className="text-gray-600">Reduce hiring time by 70% with automated interviews available 24/7</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-aicruiter-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unbiased Assessment</h3>
              <p className="text-gray-600">Ensure fair evaluation with standardized AI-driven interviews</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileBadge className="h-8 w-8 text-aicruiter-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Make informed decisions with comprehensive performance analytics</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-aicruiter-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Adaptation</h3>
              <p className="text-gray-600">AI adapts questions based on resume content and previous answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
