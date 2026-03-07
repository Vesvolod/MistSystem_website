/* Сдержанная палитра — премиум B2B, читаемые линии и подписи */
const C = {
  water: '#64748B',
  waterLight: 'rgba(148, 163, 184, 0.12)',
  nozzle: 'rgba(199, 138, 18, 0.8)',
  nozzleStroke: 'rgba(199, 138, 18, 0.28)',
  tube: '#64748B',
  tubeMuted: 'rgba(100, 116, 139, 0.62)',
  filter: 'rgba(100, 116, 139, 0.65)',
  text: '#1E293B',
  muted: '#475569',
  mutedLight: 'rgba(30, 41, 59, 0.5)',
  border: '#E2E8F0',
} as const

type NozzleProps = { x: number; y: number }

function Nozzle({ x, y }: NozzleProps) {
  return (
    <circle cx={x} cy={y} r="4" fill={C.nozzle} stroke={C.nozzleStroke} strokeWidth={0.8} />
  )
}

function Diagram() {
  const px = 20
  const py = 44
  const pw = 230
  const ph = 172
  const colX = 308
  const itemH = 74
  const pumpY = 56
  const filterY = pumpY + itemH
  const waterY = filterY + itemH
  const labelX = colX + 28

  const pL = px - 4
  const pR = px + pw + 4
  const pT = py - 4
  const pB = py + ph + 4

  /* Нозлы по центру серой периметральной линии: верх y=pT, низ y=pB, левая x=pL */
  const bNozzles = Array.from({ length: 6 }, (_, i) => ({
    x: px + 20 + ((pw - 40) / 5) * i,
    y: pB,
  }))
  const tNozzles = Array.from({ length: 5 }, (_, i) => ({
    x: px + 28 + ((pw - 56) / 4) * i,
    y: pT,
  }))
  const lNozzles = Array.from({ length: 4 }, (_, i) => ({
    x: pL,
    y: pT + 24 + ((pB - pT - 48) / 3) * i,
  }))

  return (
    <svg
      viewBox="0 0 380 280"
      width="100%"
      style={{ maxWidth: 640, display: 'block', margin: '0 auto' }}
      aria-hidden="true"
    >
      {/* Patio area — лёгкая заливка, меньше пустоты */}
      <rect
        x={px}
        y={py}
        width={pw}
        height={ph}
        rx={6}
        fill={C.waterLight}
        stroke={C.tubeMuted}
        strokeWidth={0.9}
        strokeDasharray="4,3"
      />
      <text
        x={px + pw / 2}
        y={py + ph / 2 + 1}
        textAnchor="middle"
        fontSize={10}
        fontWeight={500}
        fill={C.mutedLight}
        fontFamily="var(--font-family), system-ui"
      >
        Patio area
      </text>

      {/* Perimeter tubing — уверенная линия, хорошо читается */}
      <path
        d={`M ${pR} ${pT + 36} L ${pR} ${pT} L ${pL} ${pT} L ${pL} ${pB} L ${pR} ${pB} L ${pR} ${pB - 36}`}
        fill="none"
        stroke={C.tube}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Связь периметра с колонкой оборудования — чуть заметнее */}
      <path
        d={`M ${pR} ${pT + 36} L ${colX} ${pT + 36} L ${colX} ${pumpY - 18}`}
        fill="none"
        stroke={C.tubeMuted}
        strokeWidth={1.8}
        strokeDasharray="5,4"
      />
      <line
        x1={colX}
        y1={pumpY + 20}
        x2={colX}
        y2={filterY - 20}
        stroke={C.tubeMuted}
        strokeWidth={1.8}
        strokeDasharray="5,4"
      />
      <line
        x1={colX}
        y1={filterY + 20}
        x2={colX}
        y2={waterY - 20}
        stroke={C.tubeMuted}
        strokeWidth={1.8}
        strokeDasharray="5,4"
      />

      {/* Nozzles — только точки */}
      {bNozzles.map((n, i) => (
        <Nozzle key={`bn${i}`} x={n.x} y={n.y} />
      ))}
      {tNozzles.map((n, i) => (
        <Nozzle key={`tn${i}`} x={n.x} y={n.y} />
      ))}
      {lNozzles.map((n, i) => (
        <Nozzle key={`ln${i}`} x={n.x} y={n.y} />
      ))}

      {/* Pump — крупнее, уверенная обводка */}
      <g>
        <circle cx={colX} cy={pumpY} r={17} fill="#fff" stroke={C.tube} strokeWidth={1.5} />
        <path
          d={`M ${colX - 5} ${pumpY} L ${colX + 5} ${pumpY} M ${colX} ${pumpY - 5} L ${colX} ${pumpY + 5}`}
          stroke={C.tube}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <text
          x={labelX}
          y={pumpY + 4}
          textAnchor="start"
          fontSize={11}
          fontWeight={500}
          fill={C.muted}
          fontFamily="var(--font-family), system-ui"
        >
          Pump
        </text>
      </g>

      {/* Filter — крупнее, уверенная обводка */}
      <g>
        <rect
          x={colX - 14}
          y={filterY - 16}
          width={28}
          height={32}
          rx={6}
          fill="#fff"
          stroke={C.tube}
          strokeWidth={1.5}
        />
        {[-6, 0, 6].map((dy, i) => (
          <line
            key={i}
            x1={colX - 7}
            y1={filterY + dy}
            x2={colX + 7}
            y2={filterY + dy}
            stroke={C.tube}
            strokeWidth={1.25}
            strokeLinecap="round"
          />
        ))}
        <text
          x={labelX}
          y={filterY + 5}
          textAnchor="start"
          fontSize={11}
          fontWeight={500}
          fill={C.muted}
          fontFamily="var(--font-family), system-ui"
        >
          Filter
        </text>
      </g>

      {/* Water — крупнее, уверенная обводка */}
      <g>
        <circle cx={colX} cy={waterY} r={14} fill="#fff" stroke={C.tube} strokeWidth={1.5} />
        <circle cx={colX} cy={waterY} r={7} fill="none" stroke={C.tube} strokeWidth={1.25} />
        <text
          x={labelX}
          y={waterY + 5}
          textAnchor="start"
          fontSize={11}
          fontWeight={500}
          fill={C.muted}
          fontFamily="var(--font-family), system-ui"
        >
          Water
        </text>
      </g>
    </svg>
  )
}

export default function InstallationDiagram() {
  return (
    <div className="inst-root">
      <div className="inst-card">
        <Diagram />
      </div>
    </div>
  )
}

