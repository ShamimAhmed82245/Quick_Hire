export function Header() {
  return (
    <header className="w-full px-8 py-4 bg-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-[#4640DE] flex items-center justify-center">
            <svg className="size-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[24px] font-bold text-[#25324B]">QuickHire</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[16px] font-medium text-[#515b6f] hover:text-[#4640DE] transition-colors">
            Find Jobs
          </a>
          <a href="#" className="text-[16px] font-medium text-[#515b6f] hover:text-[#4640DE] transition-colors">
            Browse Companies
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 text-[16px] font-bold text-[#4640DE] hover:text-[#3730A3] transition-colors">
            Login
          </button>
          <button className="px-6 py-3 text-[16px] font-bold text-white bg-[#4640DE] hover:bg-[#3730A3] rounded-[4px] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
