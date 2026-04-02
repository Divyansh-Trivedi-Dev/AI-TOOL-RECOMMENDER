import React from 'react';

export default function ToolCard({ tool }) {
  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card glass-panel animate-fade-in">
      <div className="tool-header">
        <div className="tool-icon">{tool.icon}</div>
        <div className="tool-name-container">
          <h3 className="tool-name">{tool.name}</h3>
          <span className="tool-category">{tool.category}</span>
        </div>
      </div>
      
      <p className="tool-desc">{tool.description}</p>
      
      <div className="tool-tags">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="tool-tag">{tag}</span>
        ))}
      </div>
      
      <div className="tool-footer">
        <span className="visit-site">
          Visit Site
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </a>
  );
}
