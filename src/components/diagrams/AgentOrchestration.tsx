import {
  ArrowDefs,
  COLORS,
  DiagramFrame,
  Flow,
  FlowLabel,
  Node,
} from "./primitives";

/**
 * Request path through the multi-agent platform: FastAPI -> orchestrator ->
 * specialized agents -> MCP tool registry -> tools, with structured results
 * routed back through the orchestrator for downstream agents.
 */
export default function AgentOrchestration() {
  const agents = [
    { label: "Agent A", sub: "retrieval" },
    { label: "Agent B", sub: "analysis" },
    { label: "Agent C", sub: "synthesis" },
  ];
  const agentY = [30, 108, 186];
  const midY = 145;

  return (
    <DiagramFrame caption="Request path. One HTTP contract, many agents, one shared tool layer.">
      <svg
        viewBox="0 0 878 300"
        className="h-auto w-full"
        role="img"
        aria-label="Architecture diagram: client applications call a FastAPI service, which passes tasks to an orchestration layer that routes to specialized agents; agents invoke tools through an MCP tool registry and return structured output through the orchestrator."
      >
        <ArrowDefs />

        {/* Entry */}
        <Node
          x={8}
          y={midY - 37}
          w={132}
          label="Client apps"
          sub="multiple consumers"
        />
        <Node
          x={170}
          y={midY - 37}
          w={132}
          label="FastAPI"
          sub="HTTP contract"
          stroke={COLORS.accent}
        />
        <Flow d={`M 140 ${midY} H 165`} />
        <Flow d={`M 302 ${midY} H 327`} />
        <FlowLabel x={314} y={midY - 12}>
          task
        </FlowLabel>

        {/* Orchestration layer, drawn tall so the routing fan is legible */}
        <rect
          x={332}
          y={22}
          width={118}
          height={236}
          rx={6}
          fill={COLORS.box}
          stroke={COLORS.accent}
          strokeWidth={1}
        />
        <text
          x={391}
          y={midY - 4}
          textAnchor="middle"
          className="font-sans"
          fontSize={12.5}
          fill={COLORS.ink}
        >
          Orchestration
        </text>
        <text
          x={391}
          y={midY + 12}
          textAnchor="middle"
          className="font-sans"
          fontSize={12.5}
          fill={COLORS.ink}
        >
          layer
        </text>
        <text
          x={391}
          y={midY + 30}
          textAnchor="middle"
          className="font-mono"
          fontSize={9.5}
          fill={COLORS.dim}
        >
          routes + merges
        </text>

        {/* Specialized agents */}
        {agents.map((agent, i) => (
          <Node
            key={agent.label}
            x={512}
            y={agentY[i]}
            w={132}
            h={58}
            label={agent.label}
            sub={agent.sub}
          />
        ))}

        {/* Orchestrator -> agents */}
        {agentY.map((ay) => (
          <Flow
            key={`out-${ay}`}
            d={`M 450 ${midY} C 478 ${midY}, 478 ${ay + 29}, 507 ${ay + 29}`}
          />
        ))}

        {/* Agents -> MCP tool registry */}
        {agentY.map((ay) => (
          <Flow
            key={`tool-${ay}`}
            d={`M 644 ${ay + 29} C 672 ${ay + 29}, 672 ${midY}, 701 ${midY}`}
          />
        ))}

        <Node
          x={706}
          y={midY - 37}
          w={164}
          label="MCP tool registry"
          sub="declared once, shared"
          stroke={COLORS.accent}
        />

        {/* Tools hanging off the registry */}
        <Node x={706} y={22} w={164} h={44} label="External tools" dashed />
        <Node x={706} y={224} w={164} h={44} label="Internal services" dashed />
        <Flow
          d={`M 788 ${midY - 37} V 72`}
          color={COLORS.dim}
          marker="url(#arrow-dim)"
          dashed
        />
        <Flow
          d={`M 788 ${midY + 37} V 218`}
          color={COLORS.dim}
          marker="url(#arrow-dim)"
          dashed
        />

        {/* Structured results loop back into the orchestrator */}
        <path
          d="M 706 282 H 462 C 452 282, 450 278, 450 268"
          fill="none"
          stroke={COLORS.dim}
          strokeWidth={1}
          strokeDasharray="4 4"
          markerEnd="url(#arrow-dim)"
        />
        <text
          x={590}
          y={296}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          fill={COLORS.dim}
        >
          structured output → next agent
        </text>
      </svg>
    </DiagramFrame>
  );
}
