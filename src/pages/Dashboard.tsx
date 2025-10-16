import React from 'react';
import { HeartPulseIcon, TrendingUpIcon, GraduationCapIcon, UsersIcon, AwardIcon, LifeBuoyIcon, BarChart3Icon, CalendarIcon } from 'lucide-react';
import SectionCard from '../components/ui/SectionCard';
const Dashboard: React.FC = () => {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Serenity Pocket
        </h2>
        <p className="text-gray-600">
          Your journey to financial wellness and mental health begins here.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <SectionCard title="Mental Health & Wellness" description="Access mood tracking, journaling, CBT exercises, and wellness goals." icon={<HeartPulseIcon size={24} className="text-tertiary" />} to="/mental-health" color="border-tertiary" />
        <SectionCard title="ETF Education" description="Explore ETFs with AI insights, performance metrics, and educational resources." icon={<TrendingUpIcon size={24} className="text-primary" />} to="/etf-education" color="border-primary" />
        <SectionCard title="Financial Literacy" description="Learn about budgeting, emergency funds, debt management, and more." icon={<GraduationCapIcon size={24} className="text-secondary" />} to="/financial-literacy" color="border-secondary" />
        <SectionCard title="Community Forum" description="Connect with others, share experiences, and learn together." icon={<UsersIcon size={24} className="text-primary" />} to="/community" color="border-primary" />
        <SectionCard title="Challenges" description="Join financial and wellness challenges to build healthy habits." icon={<AwardIcon size={24} className="text-secondary" />} to="/challenges" color="border-secondary" />
        <SectionCard title="Crisis Support" description="Access resources for immediate help with financial or mental health concerns." icon={<LifeBuoyIcon size={24} className="text-tertiary" />} to="/crisis-support" color="border-tertiary" />
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <BarChart3Icon className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Financial Wellness Score</h3>
          </div>
          <div className="bg-gray-100 h-4 rounded-full overflow-hidden mb-2">
            <div className="bg-secondary h-full rounded-full" style={{
            width: '65%'
          }}></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">65/100</span>
            <span className="text-secondary">Good</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Your financial wellness score is based on your savings, debt
            management, and financial knowledge.
          </p>
        </div>
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-5 w-5 text-tertiary mr-2" />
            <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Budgeting Basics</p>
                <p className="text-sm text-gray-500">Lesson 1 of 8</p>
              </div>
              <span className="text-xs bg-primary-light/20 text-primary-dark py-1 px-2 rounded-full">
                Continue
              </span>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Weekly Mood Check-in</p>
                <p className="text-sm text-gray-500">Mental Health</p>
              </div>
              <span className="text-xs bg-tertiary-light/20 text-tertiary-dark py-1 px-2 rounded-full">
                Due Today
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};
export default Dashboard;