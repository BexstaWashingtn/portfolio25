type Props = {
  text: string;
  className?: string;
  accentClassName?: string;
};

const regex = /\[accent\](.*?)\[\/accent\]|\[br\]/g;

export default function StyledHeadline({
  text,
  className,
  accentClassName,
}: Props) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(regex)) {
    const fullMatch = match[0];
    const accentText = match[1];
    const index = match.index ?? 0;

    if (lastIndex < index) {
      parts.push(text.slice(lastIndex, index));
    }

    if (fullMatch === "[br]") {
      parts.push(<br key={`br-${index}`} />);
    } else {
      parts.push(
        <span key={`accent-${index}`} className={accentClassName}>
          {accentText}
        </span>,
      );
    }

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span className={className}>{parts}</span>;
}
