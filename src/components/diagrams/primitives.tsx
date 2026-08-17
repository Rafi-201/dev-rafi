import type { ReactNode } from "react";

export const COLORS = {
  box: "#121214",
  line: "#2c2c32",
  accent: "#7c9fff",
  ink: "#ededee",
  muted: "#9a9aa2",
  dim: "#64646c",
} as const;

type NodeProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  stroke?: string;
  dashed?: boolean;
};

/** A labelled box in a pipeline diagram. */
export function Node({
  x,
  y,
  w = 150,
  h = 74,
  label,
  sub,
  stroke = COLORS.line,
  dashed = false,
}: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={COLORS.box}
        stroke={stroke}
        strokeWidth={1}
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        className="font-sans"
        fontSize={12.5}
        fill={COLORS.ink}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 15}
          textAnchor="middle"
          className="font-mono"
          fontSize={9.5}
          fill={COLORS.dim}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

type FlowProps = {
  d: string;
  color?: string;
  dashed?: boolean;
  marker?: string;
};

export function Flow({
  d,
  color = COLORS.accent,
  dashed = false,
  marker = "url(#arrow)",
}: FlowProps) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={1}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={marker}
    />
  );
}

export function FlowLabel({
  x,
  y,
  children,
  color = COLORS.dim,
}: {
  x: number;
  y: number;
  children: ReactNode;
  color?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className="font-mono"
      fontSize={9}
      fill={color}
    >
      {children}
    </text>
  );
}

export function ArrowDefs() {
  return (
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX={9}
        refY={5}
        markerWidth={4.5}
        markerHeight={4.5}
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.accent} />
      </marker>
      <marker
        id="arrow-dim"
        viewBox="0 0 10 10"
        refX={9}
        refY={5}
        markerWidth={4.5}
        markerHeight={4.5}
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.dim} />
      </marker>
    </defs>
  );
}

/** Wraps a diagram so wide SVGs scroll inside their own container. */
export function DiagramFrame({
  children,
  caption,
}: {
  children: ReactNode;
  caption: string;
}) {
  return (
    <figure className="mt-10">
      <div className="overflow-x-auto">
        <div className="min-w-[660px]">{children}</div>
      </div>
      <figcaption className="mt-4 font-mono text-[11px] leading-relaxed text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
