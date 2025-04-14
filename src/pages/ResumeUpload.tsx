
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile && !selectedFile.name.endsWith('.pdf') && !selectedFile.name.endsWith('.docx')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file",
        variant: "destructive"
      });
      return;
    }
    setFile(selectedFile);
    setUploadStatus('idle');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && !droppedFile.name.endsWith('.pdf') && !droppedFile.name.endsWith('.docx')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file",
        variant: "destructive"
      });
      return;
    }
    setFile(droppedFile);
    setUploadStatus('idle');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploadStatus('success');
      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been uploaded and is being processed",
      });
    }, 2000);
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Upload Your Resume</h1>
            <p className="text-lg text-muted-foreground animate-slide-up animate-delay-100">
              Upload your resume in PDF or DOCX format to start the AIcruiter process
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 shadow-sm mb-8 animate-fade-in animate-delay-200">
            <div 
              className={`border-2 border-dashed rounded-lg p-10 text-center ${file ? 'border-primary' : 'border-muted'}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {!file ? (
                <>
                  <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h2 className="text-xl font-semibold mb-2">Drag & Drop Your Resume Here</h2>
                  <p className="text-muted-foreground mb-6">or browse from your computer</p>
                  <Button variant="outline" className="relative border-primary text-foreground hover:bg-primary hover:text-primary-foreground">
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      onChange={handleFileChange}
                      accept=".pdf,.docx"
                    />
                    Browse Files
                  </Button>
                </>
              ) : (
                <>
                  {uploadStatus === 'success' ? (
                    <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  ) : uploadStatus === 'error' ? (
                    <AlertCircle className="h-16 w-16 mx-auto mb-4 text-red-500" />
                  ) : (
                    <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
                  )}
                  <h2 className="text-xl font-semibold mb-2">{file.name}</h2>
                  <p className="text-muted-foreground mb-6">{(file.size / 1024).toFixed(2)} KB</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="outline" 
                      className="relative border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setFile(null)}
                    >
                      Change File
                    </Button>
                    <Button 
                      onClick={handleUpload} 
                      disabled={uploading || uploadStatus === 'success'}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center"
                    >
                      {uploading ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                          Uploading...
                        </>
                      ) : uploadStatus === 'success' ? (
                        'Uploaded'
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Resume
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 shadow-sm animate-fade-in animate-delay-300">
            <h2 className="text-2xl font-bold mb-4 text-foreground">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Resume Analysis</h3>
                  <p className="text-muted-foreground">Our AI will analyze your resume to extract key information and match it with job requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Interview Preparation</h3>
                  <p className="text-muted-foreground">Based on your resume, we'll prepare personalized interview questions focused on your experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Video Interview</h3>
                  <p className="text-muted-foreground">Complete your AI-powered interview at your convenience with personalized questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Comprehensive Feedback</h3>
                  <p className="text-muted-foreground">Receive detailed feedback and analysis on your interview performance with suggestions for improvement.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Start Interview Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
