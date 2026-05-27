import type { TemplateType } from '../types';

type TemplateCardProps = {
  title: TemplateType;
  description: string;
  selected: boolean;
  onSelect: (template: TemplateType) => void;
};

function TemplateCard({
  title,
  description,
  selected,
  onSelect,
}: TemplateCardProps) {
  return (
    <button
      className={`template-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(title)}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </button>
  );
}

export default TemplateCard;