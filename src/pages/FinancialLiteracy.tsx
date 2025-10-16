import React from 'react';
import { BookOpenIcon, PiggyBankIcon, ShieldIcon, CreditCardIcon, TargetIcon, GraduationCapIcon, TrendingUpIcon, CheckCircleIcon } from 'lucide-react';
const FinancialLiteracy: React.FC = () => {
  const lessons = [{
    id: 1,
    title: 'Budgeting Basics',
    description: 'Learn how to create and maintain a budget that works for your lifestyle.',
    icon: <PiggyBankIcon className="h-6 w-6 text-secondary" />,
    completed: true,
    duration: '25 min'
  }, {
    id: 2,
    title: 'Emergency Funds',
    description: 'Understand how to build and maintain an emergency fund for financial security.',
    icon: <ShieldIcon className="h-6 w-6 text-secondary" />,
    completed: true,
    duration: '20 min'
  }, {
    id: 3,
    title: 'Debt Management',
    description: 'Strategies to effectively manage and reduce your debt.',
    icon: <CreditCardIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '30 min'
  }, {
    id: 4,
    title: 'Credit Health',
    description: 'Learn how credit scores work and how to improve yours.',
    icon: <BookOpenIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '22 min'
  }, {
    id: 5,
    title: 'Setting Financial Goals',
    description: 'How to set achievable financial goals and create plans to reach them.',
    icon: <TargetIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '18 min'
  }, {
    id: 6,
    title: 'Financial Education',
    description: 'Understanding financial terms and concepts for better decision-making.',
    icon: <GraduationCapIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '35 min'
  }, {
    id: 7,
    title: 'ETF Basics',
    description: 'Introduction to Exchange-Traded Funds and how they work.',
    icon: <TrendingUpIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '28 min'
  }, {
    id: 8,
    title: 'Advanced ETF Strategies',
    description: 'Learn about different ETF types and investment strategies.',
    icon: <TrendingUpIcon className="h-6 w-6 text-secondary" />,
    completed: false,
    duration: '40 min'
  }];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Financial Literacy
        </h2>
        <p className="text-gray-600">
          Self-guided lessons to improve your financial knowledge and skills.
        </p>
      </div>
      <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Your Learning Progress
            </h3>
            <p className="text-gray-600">You've completed 2 of 8 lessons</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="bg-gray-200 h-4 w-48 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full" style={{
              width: '25%'
            }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">25% Complete</p>
          </div>
        </div>
      </div>
      <h3 className="section-title">Available Lessons</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map(lesson => <div key={lesson.id} className="card p-6">
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-secondary-light/20">
                {lesson.icon}
              </div>
              {lesson.completed && <span className="flex items-center text-xs text-green-600">
                  <CheckCircleIcon className="h-4 w-4 mr-1" />
                  Completed
                </span>}
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">{lesson.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">{lesson.duration}</span>
              <button className={`px-4 py-1.5 rounded-lg text-sm font-medium ${lesson.completed ? 'bg-gray-100 text-gray-700' : 'bg-secondary text-white'}`}>
                {lesson.completed ? 'Review' : 'Start'}
              </button>
            </div>
          </div>)}
      </div>
      <div className="mt-10 bg-primary-light/10 border border-primary-light/30 rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-3">
          Learning Path Recommendation
        </h3>
        <p className="text-gray-700 mb-4">
          Based on your profile and progress, we recommend focusing on{' '}
          <strong>Debt Management</strong> and
          <strong> Credit Health</strong> next to build a strong financial
          foundation.
        </p>
        <button className="btn-primary">View Personalized Learning Path</button>
      </div>
    </div>;
};
export default FinancialLiteracy;