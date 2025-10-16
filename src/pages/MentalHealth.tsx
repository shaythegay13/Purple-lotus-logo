import React from 'react';
import { BarChartIcon, BookOpenIcon, BrainIcon, TargetIcon } from 'lucide-react';
const MentalHealth: React.FC = () => {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Mental Health & Wellness
        </h2>
        <p className="text-gray-600">
          Tools to help you monitor and improve your mental wellbeing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mood Tracker */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-tertiary-light/20 mr-3">
              <BarChartIcon className="h-6 w-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-semibold">Mood Tracker</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Track your daily mood patterns and identify triggers that affect
            your emotional wellbeing.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">How are you feeling today?</h4>
            <div className="flex justify-between">
              {['😞', '😕', '😐', '🙂', '😄'].map((emoji, index) => <button key={index} className="w-12 h-12 text-2xl flex items-center justify-center rounded-full hover:bg-gray-100">
                  {emoji}
                </button>)}
            </div>
          </div>
          <button className="btn-tertiary w-full py-2 bg-tertiary text-white rounded-lg">
            Record Today's Mood
          </button>
        </div>
        {/* Financial Wellness Journal */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-primary-light/20 mr-3">
              <BookOpenIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">
              Financial Wellness Journal
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Document your thoughts and feelings about money to understand your
            financial behaviors.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Journal Prompts</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>How did your financial decisions make you feel today?</li>
              <li>What money concerns are on your mind right now?</li>
              <li>What's one financial win you had recently?</li>
            </ul>
          </div>
          <button className="btn-primary w-full py-2">Start Writing</button>
        </div>
        {/* CBT Exercises */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-secondary-light/20 mr-3">
              <BrainIcon className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">CBT Exercises</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Practice cognitive behavioral therapy techniques to challenge
            negative thoughts about finances.
          </p>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Thought Recording</p>
                <p className="text-sm text-gray-500">
                  Identify and challenge negative thoughts
                </p>
              </div>
              <button className="text-primary hover:underline">Start</button>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Behavioral Experiments</p>
                <p className="text-sm text-gray-500">
                  Test the validity of your beliefs
                </p>
              </div>
              <button className="text-primary hover:underline">Start</button>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Cost-Benefit Analysis</p>
                <p className="text-sm text-gray-500">
                  Evaluate financial decisions objectively
                </p>
              </div>
              <button className="text-primary hover:underline">Start</button>
            </div>
          </div>
        </div>
        {/* Wellness Goals */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-tertiary-light/20 mr-3">
              <TargetIcon className="h-6 w-6 text-tertiary" />
            </div>
            <h3 className="text-xl font-semibold">Wellness Goals</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Set and track SMART goals for your financial and mental wellbeing.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Your Active Goals</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Save $500 for emergency fund</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Practice mindfulness 3x weekly</span>
                  <span>33%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-tertiary rounded-full" style={{
                  width: '33%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-secondary w-full py-2">Create New Goal</button>
        </div>
      </div>
    </div>;
};
export default MentalHealth;