import {
  ArrowDefs,
  COLORS,
  DiagramFrame,
  Flow,
  FlowLabel,
  Node,
} from "./primitives";

/**
 * Ingestion path for the industrial IoT telemetry pipeline:
 * devices -> Event Hub -> Functions -> Service Bus -> processors -> Azure SQL,
 * with dead-letter isolation and end-to-end instrumentation.
 */
export default function IotPipeline() {
  const y = 40;
  const cols = [8, 186, 364, 542, 720];

  return (
    <DiagramFrame caption="Ingestion path. Every hop is retried, isolated on failure, and instrumented.">
      <svg
        viewBox="0 0 878 326"
        className="h-auto w-full"
        role="img"
        aria-label="Architecture diagram: IoT devices publish to Azure IoT Event Hub, consumed by Azure Functions, fanned out over Azure Service Bus topics to processors, persisted to Azure SQL, with a dead-letter queue and Azure Monitor instrumentation."
      >
        <ArrowDefs />

        {/* Main pipeline */}
        <Node x={cols[0]} y={y} label="IoT Devices" sub="North America" />
        <Node
          x={cols[1]}
          y={y}
          label="IoT Event Hub"
          sub="partitioned"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[2]}
          y={y}
          label="Azure Functions"
          sub="elastic consumers"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[3]}
          y={y}
          label="Service Bus"
          sub="topics + retry"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[4]}
          y={y}
          label="Processors"
          sub="background jobs"
          stroke={COLORS.accent}
        />

        {cols.slice(0, -1).map((c, i) => (
          <Flow key={c} d={`M ${c + 150} ${y + 37} H ${cols[i + 1] - 5}`} />
        ))}

        <FlowLabel x={172} y={y + 30}>
          telemetry
        </FlowLabel>
        <FlowLabel x={350} y={y + 30}>
          millions/day
        </FlowLabel>
        <FlowLabel x={528} y={y + 30}>
          fan-out
        </FlowLabel>
        <FlowLabel x={706} y={y + 30}>
          at-least-once
        </FlowLabel>

        {/* Dead-letter branch off Service Bus */}
        <Flow
          d={`M ${cols[3] + 75} ${y + 74} V ${y + 112}`}
          color={COLORS.dim}
          marker="url(#arrow-dim)"
          dashed
        />
        <Node
          x={cols[3]}
          y={y + 118}
          h={50}
          label="Dead-letter queue"
          dashed
        />
        <text
          x={cols[3] + 84}
          y={y + 98}
          className="font-mono"
          fontSize={9}
          fill={COLORS.dim}
        >
          poison messages
        </text>

        {/* Persistence */}
        <Flow d={`M ${cols[4] + 75} ${y + 74} V ${y + 112}`} />
        <Node
          x={cols[4]}
          y={y + 118}
          h={50}
          label="Azure SQL"
          sub="55% faster queries"
          stroke={COLORS.accent}
        />

        {/* Observability plane */}
        <rect
          x={8}
          y={262}
          width={862}
          height={50}
          rx={6}
          fill="none"
          stroke={COLORS.line}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <text
          x={26}
          y={284}
          className="font-sans"
          fontSize={12.5}
          fill={COLORS.muted}
        >
          Azure Monitor + Application Insights
        </text>
        <text x={26} y={300} className="font-mono" fontSize={9.5} fill={COLORS.dim}>
          traces · custom metrics · operational dashboards · alerting on bottlenecks
        </text>

        {/* Instrumentation taps. The last two columns tap from below their
            sub-boxes so the lines never cross a box. */}
        {cols.map((c, i) => {
          const from = i >= 3 ? y + 168 : y + 74;
          return (
            <path
              key={`tap-${c}`}
              d={`M ${c + 75} ${from} V 262`}
              stroke={COLORS.line}
              strokeWidth={1}
              strokeDasharray="2 5"
              fill="none"
            />
          );
        })}
      </svg>
    </DiagramFrame>
  );
}
