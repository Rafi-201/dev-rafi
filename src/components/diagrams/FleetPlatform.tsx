import {
  ArrowDefs,
  COLORS,
  DiagramFrame,
  Flow,
  FlowLabel,
  Node,
} from "./primitives";

/**
 * Serverless fleet operations platform, drawn as a U-turn:
 * devices -> IoT Hub -> Event Hubs -> Functions -> Azure SQL Database (top row),
 * then timer aggregations -> Service Bus -> workers -> APIM -> dashboards
 * (bottom row, right to left), with dead-letter recovery and an IaC plane.
 */
export default function FleetPlatform() {
  const top = 40;
  const bottom = 190;
  const cols = [8, 186, 364, 542, 720];

  return (
    <DiagramFrame caption="Telemetry in along the top, derived data out along the bottom. Heavy work is queued by priority; failures land in dead-letter queues, not on the floor.">
      <svg
        viewBox="0 0 878 446"
        className="h-auto w-full"
        role="img"
        aria-label="Architecture diagram: connected machines publish to Azure IoT Hub, routed to Event Hubs and consumed by Azure Functions that persist to Azure SQL Database. Timer-triggered aggregations feed high and low priority Service Bus queues for exports, reports on AKS and integrations, with dead-letter recovery. HTTP APIs behind API Management serve dashboards. Everything is provisioned with Terraform and shipped through Azure DevOps."
      >
        <ArrowDefs />

        {/* Ingestion row */}
        <Node x={cols[0]} y={top} label="Connected machines" sub="cleaning fleet" />
        <Node
          x={cols[1]}
          y={top}
          label="Azure IoT Hub"
          sub="+ DPS"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[2]}
          y={top}
          label="Event Hubs"
          sub="6 streams"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[3]}
          y={top}
          label="Azure Functions"
          sub="stream handlers"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[4]}
          y={top}
          label="Azure SQL Database"
          sub="Knex migrations"
          stroke={COLORS.accent}
        />

        {cols.slice(0, -1).map((c, i) => (
          <Flow key={`in-${c}`} d={`M ${c + 150} ${top + 37} H ${cols[i + 1] - 5}`} />
        ))}

        <FlowLabel x={172} y={top + 30}>
          telemetry
        </FlowLabel>
        <FlowLabel x={350} y={top + 30}>
          routing
        </FlowLabel>
        <FlowLabel x={528} y={top + 30}>
          trigger
        </FlowLabel>
        <FlowLabel x={706} y={top + 30}>
          persist
        </FlowLabel>

        {/* Turn down into the aggregation layer */}
        <Flow d={`M ${cols[4] + 75} ${top + 74} V ${bottom - 5}`} />
        <text
          x={cols[4] + 84}
          y={top + 112}
          className="font-mono"
          fontSize={9}
          fill={COLORS.dim}
        >
          rolling windows
        </text>

        {/* Processing and serving row, right to left */}
        <Node
          x={cols[4]}
          y={bottom}
          label="Timer aggregations"
          sub="29 CRON triggers"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[3]}
          y={bottom}
          label="Service Bus"
          sub="high / low priority"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[2]}
          y={bottom}
          label="Workers"
          sub="exports · reports · sync"
          stroke={COLORS.accent}
        />
        <Node
          x={cols[1]}
          y={bottom}
          label="API Management"
          sub="HTTP APIs"
          stroke={COLORS.accent}
        />
        <Node x={cols[0]} y={bottom} label="Dashboards" sub="exports · PDFs · alerts" />

        {cols.slice(1).map((c, i) => (
          <Flow key={`out-${c}`} d={`M ${c} ${bottom + 37} H ${cols[i] + 155}`} />
        ))}

        <FlowLabel x={172} y={bottom + 30}>
          HTTPS
        </FlowLabel>
        <FlowLabel x={350} y={bottom + 30}>
          results
        </FlowLabel>
        <FlowLabel x={528} y={bottom + 30}>
          consume
        </FlowLabel>
        <FlowLabel x={706} y={bottom + 30}>
          enqueue
        </FlowLabel>

        {/* Dead-letter branch off Service Bus */}
        <Flow
          d={`M ${cols[3] + 75} ${bottom + 74} V ${bottom + 112}`}
          color={COLORS.dim}
          marker="url(#arrow-dim)"
          dashed
        />
        <Node
          x={cols[3]}
          y={bottom + 118}
          h={50}
          label="Dead-letter / poison"
          dashed
        />
        <text
          x={cols[3] + 84}
          y={bottom + 98}
          className="font-mono"
          fontSize={9}
          fill={COLORS.dim}
        >
          failed messages
        </text>

        {/* Reports run on AKS */}
        <text
          x={cols[2] + 75}
          y={bottom + 92}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          fill={COLORS.dim}
        >
          reports on AKS · Puppeteer
        </text>

        {/* Delivery plane */}
        <rect
          x={8}
          y={382}
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
          y={404}
          className="font-sans"
          fontSize={12.5}
          fill={COLORS.muted}
        >
          Terraform + Azure DevOps
        </text>
        <text x={26} y={420} className="font-mono" fontSize={9.5} fill={COLORS.dim}>
          infrastructure as code · dev / stage / prod pipelines · Key Vault · Log Analytics · VNet
        </text>
      </svg>
    </DiagramFrame>
  );
}
