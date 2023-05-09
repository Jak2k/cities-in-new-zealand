export default function List({ points }: { points: string[] }) {
  return (
    <ul>
      {points.map((point, index) => (
        <li
          key={index}
          style={{
            opacity: 0,
            animation: `fadeIn ease-in-out 0.5s forwards ${index * 0.75}s`,
          }}
        >
          {point}
        </li>
      ))}
    </ul>
  );
}
