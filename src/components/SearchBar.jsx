export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container animate-fade-in-delayed">
      <div className="search-box glass-panel">
        <svg className="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search for an AI tool or task (e.g., 'writing', 'video', 'code')..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
