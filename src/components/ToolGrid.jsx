import ToolCard from './ToolCard';

export default function ToolGrid({ tools }) {
  if (tools.length === 0) {
    return (
      <div className="empty-state animate-fade-in-delayed">
        <div className="empty-icon">🔍</div>
        <h3>No tools found</h3>
        <p>Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="tool-grid animate-fade-in-delayed">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
