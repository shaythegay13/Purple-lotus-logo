import React from 'react';
import { PhoneIcon, MessageSquareIcon, GlobeIcon, HeartPulseIcon, WalletIcon, ShieldIcon, ExternalLinkIcon } from 'lucide-react';
const CrisisSupport: React.FC = () => {
  const emergencyContacts = [{
    name: 'National Suicide Prevention Lifeline',
    description: '24/7, free and confidential support for people in distress.',
    phone: '1-800-273-8255',
    icon: <PhoneIcon className="h-5 w-5 text-red-500" />,
    type: 'emergency'
  }, {
    name: 'Crisis Text Line',
    description: 'Text HOME to 741741 to connect with a Crisis Counselor.',
    phone: 'Text HOME to 741741',
    icon: <MessageSquareIcon className="h-5 w-5 text-blue-500" />,
    type: 'emergency'
  }, {
    name: '911 Emergency Services',
    description: 'For immediate emergency assistance.',
    phone: '911',
    icon: <PhoneIcon className="h-5 w-5 text-red-500" />,
    type: 'emergency'
  }, {
    name: 'SAMHSA National Helpline',
    description: 'Treatment referral and information service for individuals facing mental health or substance use disorders.',
    phone: '1-800-662-4357',
    icon: <PhoneIcon className="h-5 w-5 text-green-500" />,
    type: 'mental'
  }, {
    name: 'National Problem Gambling Helpline',
    description: 'Confidential help for problems with gambling.',
    phone: '1-800-522-4700',
    icon: <PhoneIcon className="h-5 w-5 text-yellow-500" />,
    type: 'financial'
  }, {
    name: 'National Foundation for Credit Counseling',
    description: 'Financial advice and debt management assistance.',
    phone: '1-800-388-2227',
    icon: <WalletIcon className="h-5 w-5 text-blue-500" />,
    type: 'financial'
  }];
  const onlineResources = [{
    name: 'BetterHelp',
    description: 'Online counseling and therapy with licensed professionals.',
    url: 'https://www.betterhelp.com',
    icon: <HeartPulseIcon className="h-5 w-5 text-purple-500" />,
    type: 'mental'
  }, {
    name: 'Psychology Today Therapist Directory',
    description: 'Find therapists, psychologists, and counselors in your area.',
    url: 'https://www.psychologytoday.com/us/therapists',
    icon: <HeartPulseIcon className="h-5 w-5 text-purple-500" />,
    type: 'mental'
  }, {
    name: 'National Foundation for Credit Counseling',
    description: 'Find certified financial counselors to help with debt and money management.',
    url: 'https://www.nfcc.org',
    icon: <WalletIcon className="h-5 w-5 text-green-500" />,
    type: 'financial'
  }, {
    name: 'Financial Planning Association',
    description: 'Connect with certified financial planners for professional guidance.',
    url: 'https://www.plannersearch.org',
    icon: <WalletIcon className="h-5 w-5 text-green-500" />,
    type: 'financial'
  }];
  const groundingTechniques = [{
    title: '5-4-3-2-1 Technique',
    description: 'Acknowledge 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste.'
  }, {
    title: 'Deep Breathing',
    description: 'Breathe in slowly for 4 counts, hold for 4, and exhale for 6 counts. Repeat 5 times.'
  }, {
    title: 'Body Scan',
    description: 'Close your eyes and mentally scan your body from head to toe, noticing any tension and consciously relaxing each part.'
  }, {
    title: 'Financial Perspective',
    description: 'Remind yourself that money problems are temporary and solvable. Focus on one small action you can take today.'
  }];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Crisis Support
        </h2>
        <p className="text-gray-600">
          Access resources for immediate help with financial or mental health
          concerns.
        </p>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <ShieldIcon className="h-6 w-6 text-red-500 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-lg text-red-700 mb-2">
              In Case of Emergency
            </h3>
            <p className="text-gray-700">
              If you or someone you know is in immediate danger, please call
              emergency services (911) right away. The resources below are
              available to provide support for various crisis situations.
            </p>
          </div>
        </div>
      </div>
      <h3 className="section-title">Emergency Contacts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {emergencyContacts.map((contact, index) => <div key={index} className={`card p-6 ${contact.type === 'emergency' ? 'border-l-4 border-red-500' : contact.type === 'mental' ? 'border-l-4 border-tertiary' : 'border-l-4 border-secondary'}`}>
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-100 mr-3">
                {contact.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{contact.name}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  {contact.description}
                </p>
                <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                  <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="font-medium">{contact.phone}</span>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <h3 className="section-title">Grounding Techniques</h3>
      <div className="bg-tertiary-light/10 rounded-lg p-6 mb-10">
        <p className="text-gray-700 mb-4">
          If you're feeling overwhelmed, these simple grounding techniques can
          help you regain a sense of calm and control:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groundingTechniques.map((technique, index) => <div key={index} className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">{technique.title}</h4>
              <p className="text-sm text-gray-600">{technique.description}</p>
            </div>)}
        </div>
      </div>
      <h3 className="section-title">Find Professional Help</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {onlineResources.map((resource, index) => <div key={index} className="card p-6">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-gray-100 mr-3">
                {resource.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">{resource.name}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  {resource.description}
                </p>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  <span>Visit Website</span>
                  <ExternalLinkIcon className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-primary-light/10 border border-primary-light/30 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-lg mb-2">Remember</h3>
        <p className="text-gray-700">
          It's okay to ask for help. Taking care of your mental and financial
          health is a sign of strength, not weakness. You're not alone on this
          journey, and support is always available.
        </p>
      </div>
    </div>;
};
export default CrisisSupport;