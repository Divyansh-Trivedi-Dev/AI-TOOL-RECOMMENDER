export default function ToolCard({ tool }) {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card glass-panel">
      <div className="tool-card-content">
        <div className="tool-header">
          <span className="tool-icon">{tool.icon}</span>
          <h3 className="tool-name">{tool.name}</h3>
        </div>
        <p className="tool-desc">{tool.description}</p>
        <div className="tool-tags">
          {tool.tags.map(tag => (
            <span key={tag} className="tool-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="tool-footer">
        <span className="tool-category">{tool.category}</span>
        <div className="try-btn">
          Try Now 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );
}
