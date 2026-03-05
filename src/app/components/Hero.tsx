import { Search, MapPin, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Hero() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('Florence, Italy');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const popularKeywords = ['UI Designer', 'UX Researcher', 'Android', 'Admin'];

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
    // Search functionality would go here
  };

  return (
    <div className="w-full px-8 py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10" viewBox="0 0 800 800">
          <path
            d="M100,200 L300,100 L500,300 L700,150"
            stroke="#4640DE"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M150,400 L350,300 L550,500 L750,350"
            stroke="#4640DE"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-[48px] lg:text-[56px] leading-[1.2] text-[#25324B]">
              Discover<br />
              more than<br />
              <span className="text-[#4640DE]">5000+ Jobs</span>
            </h1>
            <div className="w-[320px] h-[4px] bg-[#4640DE] rounded-full"></div>
          </div>

          <p className="text-[18px] text-[#515b6f] leading-[1.6] max-w-[480px]">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-[8px] shadow-lg p-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-[680px]">
            {/* Job Title Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-gray-200">
              <Search className="size-5 text-[#25324B]" />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="flex-1 text-[16px] text-[#25324B] outline-none placeholder:text-[#515b6f]"
              />
            </div>

            {/* Location Dropdown */}
            <div className="flex-1 relative">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left"
              >
                <MapPin className="size-5 text-[#25324B]" />
                <span className="flex-1 text-[16px] text-[#25324B]">{location}</span>
                <ChevronDown className="size-5 text-[#25324B]" />
              </button>
              
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[8px] shadow-lg border border-gray-200 z-20">
                  {['Florence, Italy', 'London, UK', 'New York, USA', 'Tokyo, Japan', 'Berlin, Germany'].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-[16px] text-[#25324B] hover:bg-gray-50 text-left transition-colors"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-[#4640DE] hover:bg-[#3730A3] text-white text-[16px] font-bold rounded-[4px] transition-colors"
            >
              Search my job
            </button>
          </div>

          {/* Popular Keywords */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[16px] text-[#515b6f]">Popular:</span>
            {popularKeywords.map((keyword) => (
              <button
                key={keyword}
                className="px-4 py-2 text-[16px] text-[#515b6f] hover:text-[#4640DE] hover:bg-blue-50 rounded-[4px] transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-[500px] mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzbWlsaW5nJTIwbWFuJTIwZ2xhc3NlcyUyMHBvaW50aW5nfGVufDF8fHx8MTc3MjM4NTI0NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional pointing to job opportunities"
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
