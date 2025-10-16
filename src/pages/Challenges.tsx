import React from 'react';
import { TrendingUpIcon, HeartPulseIcon, UsersIcon, CalendarIcon, CheckCircleIcon, AwardIcon, PlusCircleIcon } from 'lucide-react';
const Challenges: React.FC = () => {
  const challenges = [{
    id: 1,
    title: '30-Day No Impulse Spending',
    description: 'Commit to eliminating all impulse purchases for 30 days to build mindful spending habits.',
    category: 'Financial Wellness',
    participants: 243,
    duration: '30 days',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Daily Financial Gratitude Journal',
    description: "Record three things you're financially grateful for each day to improve your money mindset.",
    category: 'Mental Wellness',
    participants: 189,
    duration: '14 days',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    title: 'ETF Research Challenge',
    description: 'Research one new ETF each day and document its potential benefits and drawbacks for your portfolio.',
    category: 'ETF Education',
    participants: 117,
    duration: '7 days',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Mindful Money Meditation',
    description: 'Practice a 5-minute meditation focused on your financial goals and values each morning.',
    category: 'Mental Wellness',
    participants: 328,
    duration: '21 days',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1474418397713-003ec9f6a6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    title: 'Budget Tracking Sprint',
    description: 'Track every expense in real-time for two weeks to identify spending patterns and opportunities.',
    category: 'Financial Wellness',
    participants: 276,
    duration: '14 days',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 6,
    title: 'Community Financial Book Club',
    description: 'Read and discuss one chapter of a financial wellness book each day with the community.',
    category: 'Community',
    participants: 152,
    duration: '14 days',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Financial Wellness':
        return <TrendingUpIcon className="h-5 w-5 text-secondary" />;
      case 'Mental Wellness':
        return <HeartPulseIcon className="h-5 w-5 text-tertiary" />;
      case 'ETF Education':
        return <TrendingUpIcon className="h-5 w-5 text-primary" />;
      case 'Community':
        return <UsersIcon className="h-5 w-5 text-orange-500" />;
      default:
        return <AwardIcon className="h-5 w-5 text-gray-500" />;
    }
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Challenges</h2>
        <p className="text-gray-600">
          Join financial and wellness challenges to build healthy habits.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex space-x-2 w-full md:w-auto">
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
            All Challenges
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
            My Challenges
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
            Completed
          </button>
        </div>
        <button className="btn-primary flex items-center w-full md:w-auto">
          <PlusCircleIcon className="mr-2 h-5 w-5" />
          Propose Challenge
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(challenge => <div key={challenge.id} className="card overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                {getCategoryIcon(challenge.category)}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {challenge.category}
                </span>
                <span className={`ml-auto text-xs px-2 py-1 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {challenge.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <UsersIcon className="h-4 w-4 mr-1" />
                  <span>{challenge.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{challenge.duration}</span>
                </div>
              </div>
              <button className="w-full py-2 bg-white border border-primary text-primary rounded-lg hover:bg-primary-light/10 font-medium flex items-center justify-center">
                <CheckCircleIcon className="mr-2 h-5 w-5" />
                Join Challenge
              </button>
            </div>
          </div>)}
      </div>
      <div className="mt-10 bg-tertiary-light/10 border border-tertiary-light/30 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-lg mb-2">Completed a Challenge?</h3>
        <p className="text-gray-700 mb-4">
          Share your experience with the community and inspire others on their
          financial wellness journey.
        </p>
        <button className="btn-tertiary bg-tertiary text-white px-6 py-2 rounded-lg">
          Share Your Story
        </button>
      </div>
    </div>;
};
export default Challenges;