export default function CtaButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button className="cta" onClick={onClick}>
      {label}
    </button>
  );
}
