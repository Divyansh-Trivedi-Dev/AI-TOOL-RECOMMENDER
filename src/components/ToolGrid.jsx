import ToolCard from './ToolCard';

export default function ToolGrid({ tools }) {
  return (
    <div className="tool-grid animate-fade-in-delayed">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
