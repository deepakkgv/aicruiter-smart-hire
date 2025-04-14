
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, Lock, Mail, User, Users, FileText, Download, Search, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Admin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('admin');
  
  const { login, isLoggedIn, userType } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const loginType = activeTab === 'admin' ? 'admin' : 'candidate';
    const success = login(email, password, loginType);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: `Welcome to the AIcruiter ${loginType} panel.`,
      });
      
      // Redirect based on user type
      if (loginType === 'candidate') {
        navigate('/dashboard');
      }
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  if (isLoggedIn && userType === 'admin') {
    return <AdminDashboard />;
  }
  
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">AIcruiter Login</CardTitle>
          <CardDescription className="text-center">
            Login to access the AIcruiter platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="admin" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="admin">
                <Users className="h-4 w-4 mr-2" />
                Admin
              </TabsTrigger>
              <TabsTrigger value="candidate">
                <User className="h-4 w-4 mr-2" />
                Candidate
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="admin">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="admin-email"
                        placeholder="admin@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2.5 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-aicruiter-blue hover:bg-blue-700" type="submit">
                  Sign In as Admin
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <p>
                  <a href="mailto:support@aicruiter.com" className="text-aicruiter-blue hover:underline">
                    Forgot password?
                  </a>
                </p>
                <p className="mt-1 text-gray-500">
                  Demo Admin: chndeep06@gmail.com / password
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="candidate">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="candidate-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="candidate-email"
                        placeholder="candidate@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="candidate-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="candidate-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2.5 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-aicruiter-blue hover:bg-blue-700" type="submit">
                  Sign In as Candidate
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <p>
                  <a href="mailto:support@aicruiter.com" className="text-aicruiter-blue hover:underline">
                    Forgot password?
                  </a>
                </p>
                <p className="mt-1 text-gray-500">
                  Demo Candidate: candidate@example.com / any password
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">
              Don't have an account?
            </p>
            <Button onClick={() => navigate('/signup')} variant="outline" className="flex items-center">
              <UserPlus className="h-4 w-4 mr-2" />
              Create an Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const candidates = [
    {
      id: 1,
      name: "John Smith",
      position: "Frontend Developer",
      interviewDate: "2023-04-12",
      status: "Selected",
      score: 92
    },
    {
      id: 2,
      name: "Emily Johnson",
      position: "UI/UX Designer",
      interviewDate: "2023-04-11",
      status: "Under Review",
      score: 85
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Backend Developer",
      interviewDate: "2023-04-10",
      status: "Not Selected",
      score: 65
    },
    {
      id: 4,
      name: "Jessica Williams",
      position: "Project Manager",
      interviewDate: "2023-04-09",
      status: "Selected",
      score: 89
    },
    {
      id: 5,
      name: "David Miller",
      position: "DevOps Engineer",
      interviewDate: "2023-04-08",
      status: "Under Review",
      score: 78
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Manage interview reports and candidate information.
        </p>
      </div>
      
      <Tabs defaultValue="candidates">
        <TabsList className="mb-8">
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="candidates" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Interviews</CardTitle>
                <Button variant="outline" size="sm">Export Data</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-3 px-4 font-semibold text-sm">Candidate</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Position</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Interview Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Score</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate) => (
                      <tr key={candidate.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{candidate.name}</td>
                        <td className="py-3 px-4">{candidate.position}</td>
                        <td className="py-3 px-4">{candidate.interviewDate}</td>
                        <td className="py-3 px-4">{candidate.score}/100</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            candidate.status === 'Selected' 
                              ? 'bg-green-100 text-green-800' 
                              : candidate.status === 'Under Review'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {candidate.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download PDF
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-500">
                Showing 5 of 24 candidates
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interview Reports</CardTitle>
              <CardDescription>
                Access and download detailed interview reports and transcripts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{candidate.name}</h3>
                        <div className="text-sm text-gray-500">{candidate.position} • {candidate.interviewDate}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Report</Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admin Settings</CardTitle>
              <CardDescription>
                Manage your admin account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" value="chndeep06@gmail.com" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="admin-phone">Admin Phone</Label>
                    <Input id="admin-phone" value="8838577446" readOnly className="bg-gray-50" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="admin-address">Admin Address</Label>
                  <Input 
                    id="admin-address" 
                    value="Block 3A, Mambakkam High Road, Medavakkam, Chennai – 600100" 
                    readOnly 
                    className="bg-gray-50"
                  />
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>New Interview Completed</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Weekly Report Summary</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>System Notifications</span>
                      <Button variant="outline" size="sm">Disabled</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-aicruiter-blue hover:bg-blue-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
