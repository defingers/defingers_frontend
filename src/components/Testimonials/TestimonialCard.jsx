
import { Star } from 'lucide-react';
const TestimonialCard = ({ 
  rating = 5, 
  timeAgo, 
  testimonial, 
  clientName, 
  clientTitle, 
  company, 
  projectValue, 
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Content Side */}
        <div className="flex-1 p-8 lg:p-10">
          {/* Rating and Time */}
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">{timeAgo}</span>
          </div>
          
          {/* Testimonial Text */}
          <blockquote className="text-gray-800 text-lg leading-relaxed mb-8">
            "{testimonial}"
          </blockquote>
          
          {/* Client Info and Project Value */}
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="mb-4 sm:mb-0">
              <div className="font-semibold text-gray-900 text-base">
                {clientName} <span className="text-[#FF8C00] text-sm font-medium">{clientTitle}</span>
              </div>
              <div className="text-gray-700 text-base font-medium">{company}</div>
            </div>
            
            <div className="text-right">
              <div className="text-[#FF8C00] text-2xl font-bold">{projectValue}</div>
              <div className="text-gray-400 text-sm">Project Value</div>
            </div>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="w-full lg:w-80 h-64 lg:h-auto p-4">
          <img 
            src={imageSrc}
            alt="Client testimonial"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
