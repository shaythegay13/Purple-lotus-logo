import React from 'react';
import { MessageCircleIcon, ThumbsUpIcon, MessageSquareIcon, TrendingUpIcon, HeartPulseIcon, SearchIcon, PlusCircleIcon } from 'lucide-react';
const CommunityForum: React.FC = () => {
  const posts = [{
    id: 1,
    author: 'Emily Chen',
    authorAvatar: 'EC',
    title: 'How I built my emergency fund in 6 months',
    content: 'I wanted to share my journey of building a 6-month emergency fund from scratch. The key was automating my savings and cutting down on...',
    category: 'Financial Wellness',
    likes: 42,
    comments: 18,
    time: '2 hours ago',
    tags: ['Emergency Fund', 'Saving Tips']
  }, {
    id: 2,
    author: 'Marcus Johnson',
    authorAvatar: 'MJ',
    title: 'Mindfulness practices that helped my financial anxiety',
    content: 'After struggling with financial anxiety for years, I started implementing these mindfulness techniques that have made a huge difference...',
    category: 'Mental Wellness',
    likes: 37,
    comments: 23,
    time: '5 hours ago',
    tags: ['Anxiety', 'Mindfulness']
  }, {
    id: 3,
    author: 'Sarah Williams',
    authorAvatar: 'SW',
    title: 'My experience with low-cost ETFs for beginners',
    content: 'I started investing in ETFs last year and wanted to share my experience as a complete beginner. Here are the ETFs I chose and why...',
    category: 'ETF Discussion',
    likes: 29,
    comments: 14,
    time: '1 day ago',
    tags: ['Beginner Investing', 'ETFs']
  }, {
    id: 4,
    author: 'David Park',
    authorAvatar: 'DP',
    title: 'Weekly challenge: Track every expense for 7 days',
    content: "I'm starting a community challenge! For the next 7 days, track every single expense, no matter how small. This helped me identify...",
    category: 'Challenge',
    likes: 56,
    comments: 31,
    time: '2 days ago',
    tags: ['Budgeting', 'Community Challenge']
  }];
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Financial Wellness':
        return <TrendingUpIcon className="h-4 w-4 text-secondary" />;
      case 'Mental Wellness':
        return <HeartPulseIcon className="h-4 w-4 text-tertiary" />;
      case 'ETF Discussion':
        return <TrendingUpIcon className="h-4 w-4 text-primary" />;
      case 'Challenge':
        return <MessageCircleIcon className="h-4 w-4 text-orange-500" />;
      default:
        return <MessageCircleIcon className="h-4 w-4 text-gray-500" />;
    }
  };
  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'Financial Wellness':
        return 'bg-secondary-light/20 text-secondary-dark';
      case 'Mental Wellness':
        return 'bg-tertiary-light/20 text-tertiary-dark';
      case 'ETF Discussion':
        return 'bg-primary-light/20 text-primary-dark';
      case 'Challenge':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Community Forum
        </h2>
        <p className="text-gray-600">
          Connect with others, share experiences, and learn together.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div className="relative w-full md:w-1/2">
          <input type="text" placeholder="Search discussions..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <button className="btn-primary flex items-center">
            <PlusCircleIcon className="mr-2 h-5 w-5" />
            New Post
          </button>
          <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white">
            <option>All Categories</option>
            <option>Financial Wellness</option>
            <option>Mental Wellness</option>
            <option>ETF Discussion</option>
            <option>Challenges</option>
          </select>
        </div>
      </div>
      <div className="space-y-6">
        {posts.map(post => <div key={post.id} className="card p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white font-medium flex-shrink-0">
                {post.authorAvatar}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-medium">{post.author}</span>
                  <span className="text-gray-500 text-sm">• {post.time}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryClass(post.category)} flex items-center ml-auto md:ml-0`}>
                    {getCategoryIcon(post.category)}
                    <span className="ml-1">{post.category}</span>
                  </span>
                </div>
                <h3 className="font-semibold text-lg mt-1 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-3">{post.content}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      #{tag}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-primary">
                    <ThumbsUpIcon className="h-4 w-4 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-primary">
                    <MessageSquareIcon className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          Load More Posts
        </button>
      </div>
    </div>;
};
export default CommunityForum;