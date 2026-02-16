const DimensionLine = ({
  x1, y1, x2, y2, dashed = false,
}: {
  x1: number; y1: number; x2: number; y2: number; dashed?: boolean;
}) => (
  <line
    x1={x1} y1={y1} x2={x2} y2={y2}
    className="stroke-brown-400"
    strokeWidth="1"
    strokeDasharray={dashed ? '4 2' : undefined}
  />
);

const Tick = ({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) =>
  vertical ? (
    <line x1={x - 5} y1={y} x2={x + 5} y2={y} className="stroke-brown-400" strokeWidth="1" />
  ) : (
    <line x1={x} y1={y - 5} x2={x} y2={y + 5} className="stroke-brown-400" strokeWidth="1" />
  );

export const FrontView = () => (
  <div className="relative mb-16 px-4">
    <span className="absolute top-0 left-0 text-xs text-brown-400 font-bold">FRONT VIEW</span>
    <div className="flex justify-center items-center py-8">
      <svg viewBox="0 0 400 180" className="w-full max-w-lg stroke-brown-800 fill-none" strokeWidth="1.5">
        {/* Lenses */}
        <path d="M60,60 C60,40 80,30 110,30 C140,30 160,40 160,60 L160,110 C160,135 140,150 110,150 C80,150 60,135 60,110 Z" />
        <path d="M240,60 C240,40 260,30 290,30 C320,30 340,40 340,60 L340,110 C340,135 320,150 290,150 C260,150 240,135 240,110 Z" />
        {/* Bridge */}
        <path d="M160,70 Q200,50 240,70" strokeLinecap="round" />
        {/* Nose pads */}
        <path d="M155,90 Q150,100 155,110" strokeWidth="1" />
        <path d="M245,90 Q250,100 245,110" strokeWidth="1" />

        {/* Lens Width */}
        <DimensionLine x1={60} y1={20} x2={160} y2={20} dashed />
        <Tick x={60} y={20} />
        <Tick x={160} y={20} />
        <text x="110" y="15" textAnchor="middle" className="fill-brown-500 text-[10px] font-sans">렌즈 폭</text>

        {/* Bridge */}
        <DimensionLine x1={160} y1={120} x2={240} y2={120} dashed />
        <Tick x={160} y={120} />
        <Tick x={240} y={120} />
        <text x="200" y="135" textAnchor="middle" className="fill-brown-500 text-[10px] font-sans">브릿지</text>

        {/* Total Width */}
        <DimensionLine x1={60} y1={165} x2={340} y2={165} />
        <Tick x={60} y={165} />
        <Tick x={340} y={165} />
        <text x="200" y="175" textAnchor="middle" className="fill-brown-500 text-[10px] font-sans">전체 길이</text>

        {/* Lens Height */}
        <DimensionLine x1={40} y1={30} x2={40} y2={150} dashed />
        <Tick x={40} y={30} vertical />
        <Tick x={40} y={150} vertical />
        <text x="35" y="90" textAnchor="end" className="fill-brown-500 text-[10px] font-sans" transform="rotate(-90, 35, 90)">렌즈 높이</text>
      </svg>
    </div>
  </div>
);

export const SideView = () => (
  <div className="relative px-4">
    <span className="absolute top-0 left-0 text-xs text-brown-400 font-bold">SIDE VIEW</span>
    <div className="flex justify-center items-center py-8">
      <svg viewBox="0 0 400 120" className="w-full max-w-lg stroke-brown-800 fill-none" strokeWidth="1.5">
        <path d="M50,40 C60,40 70,45 80,60 C80,80 70,95 60,95 C55,95 50,90 50,80" />
        <path d="M80,50 L300,55 L340,90 C345,95 350,95 355,90" />
        <rect x="75" y="48" width="10" height="15" className="fill-brown-900" />

        <DimensionLine x1={80} y1={100} x2={355} y2={100} />
        <Tick x={80} y={100} />
        <Tick x={355} y={100} />
        <text x="217" y="115" textAnchor="middle" className="fill-brown-500 text-[10px] font-sans">다리 길이</text>
      </svg>
    </div>
  </div>
);
