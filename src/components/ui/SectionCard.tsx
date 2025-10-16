import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color: string;
}
const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  icon,
  to,
  color
}) => {
  // Extract the color name from the border class (e.g., "border-primary" -> "primary")
  const colorName = color.split('-')[1];
  return <Link to={to} className="block">
      <div className={`card p-6 h-full border-l-4 ${color}`}>
        <div className="flex items-start">
          <div className={`p-3 rounded-full bg-${colorName}-100`}>{icon}</div>
          <div className="ml-4 flex-1">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <div className={`flex items-center text-${colorName}`}>
              <span className="text-sm font-medium">Explore</span>
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>;
};
export default SectionCard;