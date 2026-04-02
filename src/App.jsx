import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ToolGrid from './components/ToolGrid';
import { tools } from './data/tools';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    if (!searchQuery && selectedCategory === 'All') return tools;

    const searchLower = searchQuery.toLowerCase().trim();
    const queryWords = searchLower.split(/\s+/);

    return tools
      .filter((tool) => {
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        if (!matchesCategory) return false;
        if (!searchLower) return true;

        // Smart match: check name, description, tags, and problems
        const nameMatch = tool.name.toLowerCase().includes(searchLower);
        const descMatch = tool.description.toLowerCase().includes(searchLower);
        const tagMatch = tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
        const problemMatch = tool.problems && tool.problems.some(prob => 
          prob.toLowerCase().includes(searchLower) || 
          queryWords.some(word => word.length > 2 && prob.toLowerCase().includes(word))
        );

        return nameMatch || descMatch || tagMatch || problemMatch;
      })
      .sort((a, b) => {
        // Boost exact name matches and problem matches to the top
        const aNameExact = a.name.toLowerCase() === searchLower ? 2 : 0;
        const bNameExact = b.name.toLowerCase() === searchLower ? 2 : 0;
        
        const aProblemMatch = a.problems && a.problems.some(p => p.toLowerCase().includes(searchLower)) ? 1 : 0;
        const bProblemMatch = b.problems && b.problems.some(p => p.toLowerCase().includes(searchLower)) ? 1 : 0;

        return (bNameExact + bProblemMatch) - (aNameExact + aProblemMatch);
      });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="app-container">
      <Header />
      <div className="filters-section animate-fade-in-delayed">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
      
      {filteredTools.length > 0 ? (
        <ToolGrid tools={filteredTools} />
      ) : (
        <div className="no-results animate-fade-in">
          <div className="no-results-icon">🔍</div>
          <h2>No matching AI tools found</h2>
          <p>Try searching for a problem like "write code" or "make a logo"</p>
          <button 
            className="clear-search-btn"
            onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
          >
            Clear all filters
          </button>
        </div>
      )}
      
      <footer className="footer animate-fade-in-delayed">
        <p>© 2026 AI Tool Recommender • Built with ✨ AI</p>
      </footer>
    </main>
  );
}

export default App;
