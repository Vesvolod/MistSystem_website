const C = {
  water: '#3B9AE8',
  waterLight: '#D1EAFF',
  nozzle: '#E8A838',
  tube: '#94A3B8',
  filter: '#34C77B',
  text: '#1E293B',
  muted: '#64748B',
  border: '#E2E8F0',
} as const

type WaterDotProps = {
  x1: number
  y1: number
  x2: number
  y2: number
  delay: number
  dur: number
}

function WaterDot({ x1, y1, x2, y2, delay, dur }: WaterDotProps) {
  return (
    <circle r="3" fill={C.water} opacity="0">
      <animate
        attributeName="cx"
        values={`${x1};${x2}`}
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values={`${y1};${y2}`}
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;0.85;0.85;0"
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  )
}

type MistSprayProps = {
  x: number
  y: number
  delay?: number
  direction?: 'down' | 'up' | 'left' | 'right'
}

function MistSpray({ x, y, delay = 0, direction = 'down' }: MistSprayProps) {
  const drops = [
    { dx: -6, dy: 12, d: 0.1 },
    { dx: 0, dy: 16, d: 0.2 },
    { dx: 6, dy: 12, d: 0.3 },
    { dx: -3, dy: 20, d: 0.15 },
    { dx: 3, dy: 20, d: 0.25 },
  ]
  const angle =
    direction === 'down'
      ? 0
      : direction === 'up'
        ? 180
        : direction === 'left'
          ? -90
          : 90
  return (
    <g transform={`rotate(${angle} ${x} ${y})`}>
      {drops.map((drop, i) => (
        <circle key={i} cx={x + drop.dx} cy={y + drop.dy} r="1.5" fill={C.water} opacity="0">
          <animate
            attributeName="opacity"
            values="0;0.45;0"
            dur="2s"
            begin={`${delay + drop.d}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`${y + 4};${y + drop.dy + 8}`}
            dur="2s"
            begin={`${delay + drop.d}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  )
}

type NozzleProps = {
  x: number
  y: number
  delay: number
  direction?: 'down' | 'up' | 'left' | 'right'
}

function Nozzle({ x, y, delay, direction }: NozzleProps) {
  return (
    <g>
      <circle cx={x} cy={y} r="5" fill={C.nozzle} stroke="#fff" strokeWidth="2" />
      <MistSpray x={x} y={y} delay={delay} direction={direction} />
    </g>
  )
}

function Diagram() {
  // Layout: patio on left, pump → filter → water vertically on right
  // Patio слегка увеличен, колонка помпы/фильтра/воды визуально компактнее
  const px = 16,
    py = 40,
    pw = 240,
    ph = 180 // patio
  const colX = 310 // center X for pump/filter/water column
  const pumpY = 60
  const filterY = 155
  const waterY = 245

  // Pipe around patio
  const pL = px - 5
  const pR = px + pw + 5
  const pT = py - 5
  const pB = py + ph + 5

  // Bottom nozzles
  const bNozzles = Array.from({ length: 7 }, (_, i) => ({
    x: px + 16 + ((pw - 32) / 6) * i,
    y: py + ph,
  }))
  // Top nozzles
  const tNozzles = Array.from({ length: 5 }, (_, i) => ({
    x: px + 28 + ((pw - 56) / 4) * i,
    y: py,
  }))
  // Left side nozzles along vertical tube
  const lNozzles = Array.from({ length: 4 }, (_, i) => ({
    x: pL,
    y: py + 24 + ((ph - 48) / 3) * i,
  }))

  return (
    <svg
      viewBox="0 0 380 300"
      width="100%"
      style={{
        maxWidth: 700,
        display: 'block',
        margin: '0 auto',
      }}
      aria-hidden="true"
    >
      {/* Patio area */}
      <rect
        x={px}
        y={py}
        width={pw}
        height={ph}
        rx={8}
        fill={C.waterLight}
        fillOpacity="0.25"
        stroke={C.water}
        strokeWidth={1}
        strokeDasharray="6,4"
        strokeOpacity="0.4"
      />
      <text
        x={px + pw / 2}
        y={py + ph / 2 + 2}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill={C.muted}
        opacity="0.45"
        fontFamily="'DM Sans', system-ui"
      >
        PATIO AREA
      </text>

      {/* SS tubing — perimeter */}
      <path
        d={`M ${pR} ${pT + 40} L ${pR} ${pT} L ${pL} ${pT} L ${pL} ${pB} L ${pR} ${pB} L ${pR} ${pB - 40}`}
        fill="none"
        stroke={C.tube}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection: pipe right side → pump (horizontal then down) */}
      <path
        d={`M ${pR} ${pT + 40} L ${colX} ${pT + 40} L ${colX} ${pumpY - 26}`}
        fill="none"
        stroke={C.tube}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6,4"
      />

      {/* Vertical pipe: pump → filter → water */}
      <line
        x1={colX}
        y1={pumpY + 28}
        x2={colX}
        y2={filterY - 22}
        stroke={C.tube}
        strokeWidth={2.5}
        strokeDasharray="6,4"
      />
      <line
        x1={colX}
        y1={filterY + 22}
        x2={colX}
        y2={waterY - 20}
        stroke={C.tube}
        strokeWidth={2.5}
        strokeDasharray="6,4"
      />

      {/* Animated water dots — along top pipe (строго по трубе) */}
      {[0, 1, 2].map((d, i) => (
        <WaterDot key={`r${i}`} x1={pR} y1={pT} x2={pL} y2={pT} delay={d * 0.9} dur={3} />
      ))}
      {/* Left side down */}
      {[0.3, 1.3].map((d, i) => (
        <WaterDot key={`d${i}`} x1={pL} y1={pT} x2={pL} y2={pB} delay={d} dur={2.2} />
      ))}
      {/* Bottom */}
      {[0.5, 1.5, 2.5].map((d, i) => (
        <WaterDot key={`b${i}`} x1={pL} y1={pB} x2={pR} y2={pB} delay={d} dur={3} />
      ))}
      {/* Supply line down to pump */}
      {[0, 1.5].map((d, i) => (
        <WaterDot key={`s${i}`} x1={colX} y1={waterY} x2={colX} y2={pumpY} delay={d} dur={2.8} />
      ))}

      {/* Nozzles */}
      {bNozzles.map((n, i) => (
        <Nozzle key={`bn${i}`} x={n.x} y={n.y} delay={i * 0.22} direction="up" />
      ))}
      {tNozzles.map((n, i) => (
        <Nozzle key={`tn${i}`} x={n.x} y={n.y} delay={i * 0.28 + 0.4} direction="down" />
      ))}
      {lNozzles.map((n, i) => (
        <Nozzle key={`ln${i}`} x={n.x} y={n.y} delay={i * 0.25 + 0.5} direction="left" />
      ))}

      {/* Pump — более компактная иконка */}
      <g>
        <rect
          x={colX - 18}
          y={pumpY - 18}
          width={36}
          height={36}
          rx={10}
          fill="#fff"
          stroke={C.nozzle}
          strokeWidth={1.5}
        />
        <circle cx={colX} cy={pumpY} r={11} fill="none" stroke={C.nozzle} strokeWidth={1.5} />
        <path
          d={`M ${colX - 4} ${pumpY} L ${colX + 4} ${pumpY} M ${colX} ${pumpY - 4} L ${colX} ${pumpY + 4}`}
          stroke={C.nozzle}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <text
          x={colX + 24}
          y={pumpY - 10}
          textAnchor="start"
          fontSize={7}
          fontWeight={700}
          fill={C.nozzle}
          fontFamily="'DM Sans', system-ui"
        >
          70 BAR
        </text>
        <text
          x={colX + 24}
          y={pumpY + 4}
          textAnchor="start"
          fontSize={8}
          fontWeight={600}
          fill={C.muted}
          fontFamily="'DM Sans', system-ui"
        >
          PUMP
        </text>
      </g>

      {/* Filter — уменьшенная колонка */}
      <g>
        <rect
          x={colX - 13}
          y={filterY - 16}
          width={26}
          height={32}
          rx={7}
          fill="#fff"
          stroke={C.filter}
          strokeWidth={1.5}
        />
        {[-6, 0, 6].map((dy, i) => (
          <line
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            x1={colX - 8}
            y1={filterY + dy}
            x2={colX + 8}
            y2={filterY + dy}
            stroke={C.filter}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
        ))}
        <text
          x={colX + 24}
          y={filterY + 4}
          textAnchor="start"
          fontSize={8}
          fontWeight={600}
          fill={C.muted}
          fontFamily="'DM Sans', system-ui"
        >
          FILTER
        </text>
      </g>

      {/* Water source — уменьшенная иконка */}
      <g>
        <rect
          x={colX - 15}
          y={waterY - 15}
          width={30}
          height={30}
          rx={8}
          fill="#fff"
          stroke={C.water}
          strokeWidth={1.5}
        />
        <circle cx={colX} cy={waterY} r={8} fill="none" stroke={C.water} strokeWidth={1.3} />
        <path
          d={`M ${colX} ${waterY - 5} Q ${colX + 3} ${waterY} ${colX} ${waterY + 5}`}
          fill={C.water}
          opacity={0.5}
        />
        <text
          x={colX + 24}
          y={waterY + 4}
          textAnchor="start"
          fontSize={8}
          fontWeight={600}
          fill={C.muted}
          fontFamily="'DM Sans', system-ui"
        >
          WATER
        </text>
      </g>
    </svg>
  )
}

type LegendItemProps = {
  color: string
  label: string
}

function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div className="inst-legend-item">
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 6,
          background: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
      </div>
      <span className="inst-legend-label" style={{ fontWeight: 500, color: C.text }}>
        {label}
      </span>
    </div>
  )
}

export default function InstallationDiagram() {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    .inst-root { font-family: 'DM Sans', system-ui, sans-serif; width: 100%; margin: 0; padding: 0; }
    .inst-root * { box-sizing: border-box; }
    .inst-card { width: 100%; background: #fff; border-radius: 24px; padding: 24px 16px 20px; border: 1px solid #E2E8F0; box-shadow: 0 2px 12px rgba(15,23,42,0.04); }
    .inst-divider { height: 1px; background: #E2E8F0; margin: 20px 0 12px; }
    .inst-legend { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; padding: 0 8px; }
    .inst-legend-item { display: flex; align-items: center; gap: 8px; padding: 6px 0; }
    .inst-legend-label { font-size: 11px; }
    @media (min-width: 720px) {
      .inst-card { padding: 32px 24px 24px; border-radius: 28px; }
      .inst-legend { gap: 0 40px; padding: 0 16px; }
    }
    @media (min-width: 960px) {
      .inst-legend { display: flex; grid-template-columns: none; padding: 0 24px; gap: 32px; justify-content: space-between; }
      .inst-legend-item { padding: 0; }
      .inst-legend-label { font-size: 13px; }
    }
  `

  return (
    <div className="inst-root">
      <style>{css}</style>
      <div className="inst-card">
        <Diagram />
        <div className="inst-divider" />
        <div className="inst-legend">
          <LegendItem color={C.water} label="Water flow" />
          <LegendItem color={C.nozzle} label="Mist nozzles" />
          <LegendItem color={C.tube} label="SS tubing" />
          <LegendItem color={C.filter} label="Filtration" />
        </div>
      </div>
    </div>
  )
}

