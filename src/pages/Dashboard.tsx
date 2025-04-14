
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Search, Download } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const Dashboard: React.FC = () => {
  const { isLoggedIn, userType, email, fullName, candidates } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold">Please log in to view your dashboard</h1>
        <Button onClick={() => navigate('/admin')} className="mt-4">
          Go to Login
        </Button>
      </div>
    );
  }

  if (userType === 'admin') {
    return <AdminDashboard />;
  }

  return <CandidateDashboard />;
};

const CandidateDashboard: React.FC = () => {
  const skillsData = [
    { subject: 'Technical Knowledge', A: 85, fullMark: 100 },
    { subject: 'Problem Solving', A: 78, fullMark: 100 },
    { subject: 'Communication', A: 92, fullMark: 100 },
    { subject: 'Experience', A: 80, fullMark: 100 },
    { subject: 'Cultural Fit', A: 88, fullMark: 100 },
  ];

  const performanceData = [
    { name: 'Q1', score: 75 },
    { name: 'Q2', score: 82 },
    { name: 'Q3', score: 68 },
    { name: 'Q4', score: 90 },
    { name: 'Q5', score: 95 },
    { name: 'Q6', score: 85 },
    { name: 'Q7', score: 72 },
    { name: 'Q8', score: 88 },
  ];

  const overallScore = 82;
  const overallScoreData = [
    { name: 'Score', value: overallScore },
    { name: 'Remaining', value: 100 - overallScore }
  ];
  const COLORS = ['#2563eb', '#e5e7eb'];

  const improvementAreas = [
    { area: 'Technical knowledge of advanced React patterns', priority: 'High' },
    { area: 'Database optimization techniques', priority: 'Medium' },
    { area: 'Concise explanation of complex concepts', priority: 'Low' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Candidate Dashboard</h1>
        <p className="text-gray-600">
          View your interview performance and insights to improve your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallScoreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {overallScoreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#2563eb"
                  >
                    {overallScore}/100
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm font-medium text-gray-500">
                {overallScore >= 80 ? 'Excellent' : overallScore >= 70 ? 'Good' : 'Needs Improvement'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Interview Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-5xl font-bold text-aicruiter-blue mb-2">18:42</div>
              <div className="text-sm text-gray-500">Minutes:Seconds</div>
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Questions Answered</span>
                  <span className="font-medium">8/10</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Interview Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 py-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technical Knowledge</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Communication</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Problem Solving</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Impression</span>
                  <span className="font-medium">Good</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Skills" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#0d9488" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Areas for Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-sm">Area</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Priority</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {improvementAreas.map((item, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-4">{item.area}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          item.priority === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : item.priority === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {item.priority === 'High' 
                          ? 'Study advanced React concepts and practice implementing them in projects.'
                          : item.priority === 'Medium'
                            ? 'Review database optimization techniques and their practical applications.'
                            : 'Practice explaining complex concepts in simpler terms using analogies.'
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          This dashboard provides a summary of your interview performance. The complete report will be sent to the hiring manager.
        </p>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const { email, fullName, candidates } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const adminCompany = "AIcruiter Inc.";
  
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || 
      candidate.status.toLowerCase() === statusFilter.toLowerCase();
    
    const matchesCompany = candidate.company === adminCompany;
    
    return matchesSearch && matchesStatus && matchesCompany;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, {fullName || email}. Manage your candidates and interview reports.
        </p>
      </div>
      
      <Tabs defaultValue="candidates">
        <TabsList className="mb-8">
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="candidates" className="space-y-6">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search candidates..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="border rounded-md p-2 w-full md:w-48"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="selected">Selected</option>
                  <option value="under review">Under Review</option>
                  <option value="not selected">Not Selected</option>
                </select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Candidates ({filteredCandidates.length})</CardTitle>
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
                    {filteredCandidates.length > 0 ? (
                      filteredCandidates.map((candidate) => (
                        <tr key={candidate.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="text-sm text-gray-500">{candidate.email}</div>
                            </div>
                          </td>
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
                                PDF
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-gray-500">
                          No candidates found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-gray-500">
                Showing {filteredCandidates.length} of {candidates.filter(c => c.company === adminCompany).length} candidates
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
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Downloaded', value: 18 },
                        { name: 'Not Downloaded', value: 6 }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#2563eb" />
                      <Cell fill="#e5e7eb" />
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-lg font-bold"
                      fill="#2563eb"
                    >
                      18/24
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-medium text-gray-500">
                  75% of reports downloaded
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Company Name</span>
                    <span className="font-medium">{adminCompany}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Notification Settings</span>
                    <span className="font-medium">Enabled</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Language</span>
                    <span className="font-medium">English</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
