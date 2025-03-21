// Create a new component for the floating icons
const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Laptop icon */}
      <div className="absolute top-[10%] left-[15%] bg-blue-100 p-3 rounded-md border-l-4 border-blue-400 hover:animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="20" x2="22" y2="20"></line>
        </svg>
      </div>

      {/* Basketball icon */}
      <div className="absolute top-[5%] left-[45%] bg-yellow-100 p-3 rounded-md border-l-4 border-yellow-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M4.93 4.93l4.24 4.24"></path>
          <path d="M14.83 14.83l4.24 4.24"></path>
          <path d="M14.83 9.17l4.24-4.24"></path>
          <path d="M9.17 14.83l-4.24 4.24"></path>
        </svg>
      </div>

      {/* Calendar icon */}
      <div className="absolute bottom-[0%] left-[10%] bg-gray-100 p-4 rounded-md border-l-4 border-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <text
            x="12"
            y="19"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
          >
            17
          </text>
        </svg>
      </div>

      {/* Checklist icon */}
      <div className="absolute top-[45%] right-[15%] bg-purple-100 p-3 rounded-md border-l-4 border-purple-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <path d="M3 6h.01"></path>
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
        </svg>
      </div>

      {/* Bicycle icon */}
      <div className="absolute bottom-[0%] right-[5%] bg-blue-100 p-3 rounded-md border-l-4 border-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <circle cx="5.5" cy="17.5" r="3.5"></circle>
          <circle cx="18.5" cy="17.5" r="3.5"></circle>
          <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5l2.5-10.5H7"></path>
          <path d="M14 15l3 2.5"></path>
          <path d="M13 15l-3-5.5"></path>
        </svg>
      </div>

      {/* Coffee cup icon */}
      <div className="absolute bottom-[15%] left-[40%] bg-orange-100 p-3 rounded-md border-l-4 border-orange-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500"
        >
          <path d="M17 8h1a4 4 0 110 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
      </div>
    </div>
  );
};

export default FloatingIcons;
