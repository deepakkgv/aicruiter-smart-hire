
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileUp, 
  Camera, 
  Mic, 
  VideoIcon, 
  CheckCircle, 
  XCircle,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Interview: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<any>(null);
  const [permissionsGranted, setPermissionsGranted] = useState<{camera: boolean, microphone: boolean}>({
    camera: false,
    microphone: false
  });
  
  const { toast } = useToast();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if file is PDF or DOCX
      const fileType = selectedFile.type;
      if (fileType === 'application/pdf' || 
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleResumeUpload = () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please select a resume file to upload.",
        variant: "destructive"
      });
      return;
    }
    
    // This would normally call an API to parse the resume
    // For now, we're simulating the parsing with mock data
    
    setTimeout(() => {
      // Mock parsed resume data
      setResumeData({
        name: "Sample Candidate",
        email: "candidate@example.com",
        phone: "123-456-7890",
        experience: 5,
        skills: ["JavaScript", "React", "Node.js", "Python"],
        designation: "Senior Software Developer",
        projects: ["E-commerce Platform", "Healthcare App"]
      });
      
      toast({
        title: "Resume Uploaded Successfully",
        description: "Your resume has been processed and information extracted.",
      });
      
      setStep(2);
    }, 1500);
  };
  
  const requestPermissions = async () => {
    try {
      const cameraResult = await navigator.mediaDevices.getUserMedia({ video: true });
      const micResult = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Stop the streams immediately after testing
      cameraResult.getTracks().forEach(track => track.stop());
      micResult.getTracks().forEach(track => track.stop());
      
      setPermissionsGranted({
        camera: true,
        microphone: true
      });
      
      toast({
        title: "Permissions Granted",
        description: "Camera and microphone access allowed.",
      });
      
    } catch (error) {
      toast({
        title: "Permission Error",
        description: "Camera and microphone access is required for the interview.",
        variant: "destructive"
      });
      
      console.error("Permission error:", error);
    }
  };
  
  const startInterview = () => {
    if (!permissionsGranted.camera || !permissionsGranted.microphone) {
      toast({
        title: "Permissions Required",
        description: "Camera and microphone access is required to start the interview.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(3);
  };
  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <FileUp className="h-12 w-12 text-aicruiter-blue mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">Upload Your Resume</h2>
                  <p className="text-gray-500 mt-1">
                    Upload your resume in PDF or DOCX format to begin the interview process.
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
                  <Input 
                    type="file" 
                    id="resume-upload" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <label 
                    htmlFor="resume-upload" 
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <div className="bg-blue-50 p-3 rounded-full mb-3">
                      <FileUp className="h-6 w-6 text-aicruiter-blue" />
                    </div>
                    <span className="text-sm font-medium text-aicruiter-blue mb-1">Click to upload</span>
                    <span className="text-xs text-gray-500">PDF or DOCX (Max 5MB)</span>
                  </label>
                </div>
                
                {file && (
                  <div className="bg-blue-50 p-3 rounded flex items-center mb-6">
                    <FileUp className="h-5 w-5 text-aicruiter-blue mr-2" />
                    <span className="text-sm font-medium truncate">{file.name}</span>
                  </div>
                )}
                
                <Button 
                  className="w-full bg-aicruiter-blue hover:bg-blue-700"
                  onClick={handleResumeUpload}
                  disabled={!file}
                >
                  Continue to Next Step
                </Button>
              </CardContent>
            </Card>
          </div>
        );
        
      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex justify-center gap-4 mb-2">
                    <Camera className="h-8 w-8 text-aicruiter-blue" />
                    <Mic className="h-8 w-8 text-aicruiter-teal" />
                  </div>
                  <h2 className="text-2xl font-bold">Camera & Microphone Access</h2>
                  <p className="text-gray-500 mt-1">
                    We need access to your camera and microphone to conduct the AI interview.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border text-center">
                    <div className="mb-3 flex justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold mb-1">Camera</h3>
                    <p className="text-sm text-gray-500 mb-3">Required for video recording</p>
                    {permissionsGranted.camera ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Granted</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-amber-600">
                        <AlertCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Required</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border text-center">
                    <div className="mb-3 flex justify-center">
                      <Mic className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold mb-1">Microphone</h3>
                    <p className="text-sm text-gray-500 mb-3">Required for audio recording</p>
                    {permissionsGranted.microphone ? (
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Granted</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-amber-600">
                        <AlertCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Required</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {resumeData && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-gray-700">Resume Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Email</dt>
                          <dd className="mt-1 text-sm text-gray-900">{resumeData.email}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Phone</dt>
                          <dd className="mt-1 text-sm text-gray-900">{resumeData.phone}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Experience</dt>
                          <dd className="mt-1 text-sm text-gray-900">{resumeData.experience} years</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Designation</dt>
                          <dd className="mt-1 text-sm text-gray-900">{resumeData.designation}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Skills</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <div className="flex flex-wrap gap-1">
                              {resumeData.skills.map((skill: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  
                  {!permissionsGranted.camera || !permissionsGranted.microphone ? (
                    <Button 
                      className="flex-1 bg-aicruiter-blue hover:bg-blue-700"
                      onClick={requestPermissions}
                    >
                      Allow Access
                    </Button>
                  ) : (
                    <Button 
                      className="flex-1 bg-aicruiter-blue hover:bg-blue-700"
                      onClick={startInterview}
                    >
                      Start Interview
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case 3:
        return (
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <VideoIcon className="h-12 w-12 text-aicruiter-blue mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">AI Interview in Progress</h2>
                  <p className="text-gray-500 mt-1">
                    Your interview with our AI assistant is now in progress.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                  <div className="col-span-3 aspect-video bg-black rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                        <p className="text-white text-center">
                          Video Interview Demo
                          <br />
                          <span className="text-sm opacity-70">(Actual implementation will include real-time video)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 flex flex-col">
                    <div className="bg-gray-50 p-4 rounded-lg border flex-grow overflow-y-auto max-h-[30vh]">
                      <h3 className="font-semibold mb-3">Interview Transcript</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-sm font-semibold text-blue-700">AI Interviewer</p>
                          <p className="text-sm">Welcome to your interview! Could you tell me about your experience with React development?</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-md">
                          <p className="text-sm font-semibold">You</p>
                          <p className="text-sm">I have 3 years of experience with React, including work on large-scale applications...</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-sm font-semibold text-blue-700">AI Interviewer</p>
                          <p className="text-sm">Great! Can you share a challenging project you worked on and how you overcame obstacles?</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-semibold mb-2">Interview Controls</h3>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Mic className="h-4 w-4" />
                          <span>Mute</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Camera className="h-4 w-4" />
                          <span>Camera</span>
                        </Button>
                        <Button variant="destructive" size="sm">End</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border mb-6">
                  <h3 className="font-semibold mb-2">Interview Status</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Recording in progress</span>
                    </div>
                    <div>
                      <span className="font-medium">Time elapsed:</span> 2:45
                    </div>
                    <div>
                      <span className="font-medium">Questions completed:</span> 2/10
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">
                    When you complete the interview, you'll be redirected to your dashboard with results.
                  </p>
                  <Link to="/dashboard">
                    <Button variant="outline">
                      Skip to Dashboard Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="py-10 px-4 min-h-[80vh] flex items-center">
      <div className="w-full">
        {renderStep()}
      </div>
    </div>
  );
};

export default Interview;
