
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const UploadResume: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (resume) {
      toast({
        title: "Resume Uploaded",
        description: `${resume.name} has been successfully uploaded.`,
      });
      // Here you would typically implement file upload logic
    } else {
      toast({
        title: "No File Selected",
        description: "Please select a resume to upload.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-green-500">Upload Resume</h1>
          <p className="text-gray-400">Upload your resume to start your AI interview process</p>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-dashed border-green-500/50 p-6 text-center">
            <FileText className="mx-auto mb-4 text-green-500" size={48} />
            <label 
              htmlFor="resume" 
              className="block text-gray-400 mb-2"
            >
              {resume ? resume.name : "Select your resume (PDF/DOCX)"}
            </label>
            <Input
              id="resume"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.docx,.doc"
            />
            <label 
              htmlFor="resume"
              className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              <Upload className="inline-block mr-2" size={16} />
              Choose File
            </label>
          </div>

          <Button 
            onClick={handleUpload} 
            className="w-full bg-green-500 hover:bg-green-600"
          >
            Start Interview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
