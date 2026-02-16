const VERTICES = [
  { x: 50, y: 5 },
  { x: 90, y: 27.5 },
  { x: 90, y: 72.5 },
  { x: 50, y: 95 },
  { x: 10, y: 72.5 },
  { x: 10, y: 27.5 },
];

const HexagonChart = () => {
  const points = VERTICES.map((v) => `${v.x},${v.y}`).join(' ');

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-brown-600 fill-none"
        strokeWidth="0.5"
      >
        <polygon points={points} />
        {VERTICES.map((v, i) => (
          <line key={i} x1={v.x} y1={v.y} x2="50" y2="50" />
        ))}
      </svg>
    </div>
  );
};

export { VERTICES };
export default HexagonChart;
